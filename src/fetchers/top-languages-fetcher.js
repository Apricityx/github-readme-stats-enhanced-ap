// @ts-check
import { retryer } from "../common/retryer.js";
import {
  CustomError,
  logger,
  MissingParamError,
  request,
  wrapTextMultiline,
} from "../common/utils.js";

/**
 * @typedef {import("axios").AxiosRequestHeaders} AxiosRequestHeaders Axios request headers.
 * @typedef {import("axios").AxiosResponse} AxiosResponse Axios response.
 */

/**
 * Top languages fetcher object.
 *
 * @param {AxiosRequestHeaders} variables Fetcher variables.
 * @param {string} token GitHub token.
 * @returns {Promise<AxiosResponse>} Languages fetcher response.
 */
const fetcher = (variables, token) => {
  const query = variables.includeManagedRepos ? `
    query userInfo($login: String!) {
      user(login: $login) {
        # fetch owner repos first
        ownedRepos: repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
          nodes {
            name
            owner {
              login
              __typename
            }
            viewerPermission
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  color
                  name
                }
              }
            }
          }
        }
        # fetch organization repos separately
        orgRepos: repositories(ownerAffiliations: ORGANIZATION_MEMBER, isFork: false, first: 100) {
          nodes {
            name
            owner {
              login
              __typename
            }
            viewerPermission
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  ` : `
    query userInfo($login: String!) {
      user(login: $login) {
        # fetch only owner repos & not forks
        repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
          nodes {
            name
            owner {
              login
              __typename
            }
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  return request(
    {
      query,
      variables,
    },
    {
      Authorization: `token ${token}`,
    },
  );
};

/**
 * @typedef {import("./types").TopLangData} TopLangData Top languages data.
 */

/**
 * Fetch top languages for a given username.
 *
 * @param {string} username GitHub username.
 * @param {string[]} exclude_repo List of repositories to exclude.
 * @param {number} size_weight Weightage to be given to size.
 * @param {number} count_weight Weightage to be given to count.
 * @param {boolean} include_managed_repos Include managed organization repositories.
 * @returns {Promise<TopLangData>} Top languages data.
 */
const fetchTopLanguages = async (
  username,
  exclude_repo = [],
  size_weight = 1,
  count_weight = 0,
  include_managed_repos = false,
) => {
  if (!username) {
    throw new MissingParamError(["username"]);
  }

  const res = await retryer(fetcher, {
    login: username,
    includeManagedRepos: include_managed_repos
  });

  if (res.data.errors) {
    logger.error(res.data.errors);
    if (res.data.errors[0].type === "NOT_FOUND") {
      throw new CustomError(
        res.data.errors[0].message || "Could not fetch user.",
        CustomError.USER_NOT_FOUND,
      );
    }
    if (res.data.errors[0].message) {
      throw new CustomError(
        wrapTextMultiline(res.data.errors[0].message, 90, 1)[0],
        res.statusText,
      );
    }
    throw new CustomError(
      "Something went wrong while trying to retrieve the language data using the GraphQL API.",
      CustomError.GRAPHQL_ERROR,
    );
  }

  let repoNodes;
  if (include_managed_repos) {
    // Combine owned repos and organization repos
    const ownedRepos = res.data.data.user.ownedRepos.nodes;
    const orgRepos = res.data.data.user.orgRepos.nodes;
    repoNodes = [...ownedRepos, ...orgRepos];
  } else {
    repoNodes = res.data.data.user.repositories.nodes;
  }

  let repoToHide = {};

  // populate repoToHide map for quick lookup
  // while filtering out
  if (exclude_repo) {
    exclude_repo.forEach((repoName) => {
      repoToHide[repoName] = true;
    });
  }

  // Filter repositories based on management permissions
  if (include_managed_repos) {
    // Include managed organization repositories
    repoNodes = repoNodes.filter(repo => {
      // Include owned repositories (user repositories)
      if (repo.owner && repo.owner.__typename === 'User') {
        return true;
      }
      // Include organization repositories where user has management permissions
      if (repo.owner && repo.owner.__typename === 'Organization') {
        return ['ADMIN', 'MAINTAIN'].includes(repo.viewerPermission);
      }
      return false;
    });
  } else {
    // Only include user's own repositories, exclude organization repositories
    repoNodes = repoNodes.filter(repo => {
      return repo.owner && repo.owner.__typename === 'User';
    });
  }

  // filter out repositories to be hidden
  repoNodes = repoNodes
    .sort((a, b) => b.size - a.size)
    .filter((name) => !repoToHide[name.name]);

  let repoCount = 0;

  repoNodes = repoNodes
    .filter((node) => node.languages.edges.length > 0)
    // flatten the list of language nodes
    .reduce((acc, curr) => curr.languages.edges.concat(acc), [])
    .reduce((acc, prev) => {
      // get the size of the language (bytes)
      let langSize = prev.size;

      // if we already have the language in the accumulator
      // & the current language name is same as previous name
      // add the size to the language size and increase repoCount.
      if (acc[prev.node.name] && prev.node.name === acc[prev.node.name].name) {
        langSize = prev.size + acc[prev.node.name].size;
        repoCount += 1;
      } else {
        // reset repoCount to 1
        // language must exist in at least one repo to be detected
        repoCount = 1;
      }
      return {
        ...acc,
        [prev.node.name]: {
          name: prev.node.name,
          color: prev.node.color,
          size: langSize,
          count: repoCount,
        },
      };
    }, {});

  Object.keys(repoNodes).forEach((name) => {
    // comparison index calculation
    repoNodes[name].size =
      Math.pow(repoNodes[name].size, size_weight) *
      Math.pow(repoNodes[name].count, count_weight);
  });

  const topLangs = Object.keys(repoNodes)
    .sort((a, b) => repoNodes[b].size - repoNodes[a].size)
    .reduce((result, key) => {
      result[key] = repoNodes[key];
      return result;
    }, {});

  return topLangs;
};

export { fetchTopLanguages };
export default fetchTopLanguages;
