<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats Enhanced" />
 <h2 align="center">GitHub Readme Stats Enhanced</h2>
 <p align="center">基于 github-readme-stats 的增强版本，支持统计管理的组织仓库！</p>
</p>

<p align="center">
  <strong>🚀 新功能：支持统计你管理的组织仓库的 Stars 和编程语言！</strong>
</p>

<p align="center">
  <a href="https://vercel.com?utm\_source=github\_readme\_stats\_team\&utm\_campaign=oss">
    <img src="../powered-by-vercel.svg"/>
  </a>
</p>

<p align="center">
  <a href="../readme.md">English</a>
  ·
  <a href="#全部演示">查看演示</a>
  ·
  <a href="#管理仓库功能">🆕 管理仓库功能</a>
  ·
  <a href="#部署你自己的实例">部署指南</a>
</p>

## 📋 关于本项目

这是基于 [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) 的增强版本，主要添加了以下功能：

### 🆕 新增功能

- **管理仓库统计** - 支持统计你在组织中管理的仓库（具有 ADMIN 或 MAINTAIN 权限）
- **精确权限控制** - 只统计你真正管理的仓库，而不是组织中的所有仓库
- **Stars 统计增强** - 包含管理的组织仓库的 stars 数量
- **语言统计增强** - 包含管理的组织仓库使用的编程语言

### 💡 为什么需要这个功能？

原版 github-readme-stats 只统计你**拥有**的仓库，但如果你是组织中某些项目的管理者，这些仓库的贡献不会被统计在内。本增强版解决了这个问题！

## 🔥 管理仓库功能 {#管理仓库功能}

### 快速开始

只需在原有的 URL 中添加 `include_managed_repos=true` 参数：

#### GitHub Stats Card
```markdown
![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&include_managed_repos=true)
```

#### Top Languages Card
```markdown
![Top Languages](https://github-readme-stats-enhanced.vercel.app/api/top-langs?username=你的用户名&include_managed_repos=true)
```

### 权限说明

只有具有以下权限的组织仓库会被统计：
- ✅ `ADMIN` - 管理员权限
- ✅ `MAINTAIN` - 维护权限
- ❌ `WRITE` - 写入权限（不统计）
- ❌ `TRIAGE` - 分类权限（不统计）
- ❌ `READ` - 读取权限（不统计）

# 功能特性 <!-- omit in toc -->

## 🆕 增强功能
- [管理仓库统计](#管理仓库功能) - **新增功能**
  - [使用方法](#快速开始)
  - [权限说明](#权限说明)

## 📊 原有功能
- [GitHub Stats Card](#github-stats-card)
    - [隐藏特定统计](#隐藏特定统计)
    - [显示额外统计](#显示额外统计)
    - [显示图标](#显示图标)
    - [主题](#主题)
    - [自定义](#自定义)
- [GitHub Extra Pins](#github-extra-pins)
- [GitHub Gist Pins](#github-gist-pins)
- [Top Languages Card](#top-languages-card)
    - [语言统计算法](#语言统计算法)
    - [排除特定仓库](#排除特定仓库)
    - [隐藏特定语言](#隐藏特定语言)
    - [显示更多语言](#显示更多语言)
    - [紧凑布局](#紧凑布局)
    - [甜甜圈图布局](#甜甜圈图布局)
    - [垂直甜甜圈图布局](#垂直甜甜圈图布局)
    - [饼图布局](#饼图布局)
    - [隐藏进度条](#隐藏进度条)
- [WakaTime Stats Card](#wakatime-stats-card)
- [全部演示](#全部演示)
  - [快速提示（对齐卡片）](#快速提示对齐卡片)

## 🚀 部署
- [部署你自己的实例](#部署你自己的实例)
  - [在 Vercel 上部署](#在-vercel-上部署)
  - [在其他平台部署](#在其他平台部署)
  - [禁用速率限制保护](#禁用速率限制保护)

# 重要说明 <!-- omit in toc -->

> [!IMPORTANT]\
> 本项目基于 [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) 开发，添加了管理仓库统计功能。由于 GitHub API 每小时只允许 [5k 请求](https://docs.github.com/en/graphql/overview/resource-limitations)，**强烈建议部署自己的实例**以获得最佳体验。

> [!WARNING]\
> **管理仓库功能注意事项**：
> - `include_managed_repos=true` 只有在使用**你自己部署的实例**和**你自己的 GitHub token** 时才能正常工作
> - 使用他人的实例无法正确检测你的组织仓库权限
> - 此功能会查询更多仓库数据，可能更容易触发 GitHub API 速率限制
>
> **建议**：
> - 部署自己的 Vercel 实例以获得完整功能
> - 使用适当的缓存设置
> - 避免频繁刷新

> [!TIP]\
> **推荐使用方式**：
> 1. Fork 本项目
> 2. 部署到你自己的 Vercel 账户
> 3. 配置你的 GitHub API Token
> 4. 享受完整的管理仓库统计功能！

## 🔄 与原项目的关系

本项目是 [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) 的增强版本，保持了所有原有功能，并添加了管理仓库统计功能。感谢原作者 [@anuraghazra](https://github.com/anuraghazra) 的优秀工作！

# GitHub Stats Card

将以下代码复制粘贴到你的 markdown 文件中即可！

将 `?username=` 的值改为你的 GitHub 用户名。

## 基础用法

```md
[![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

## 🆕 包含管理仓库

```md
[![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&include_managed_repos=true)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

> [!WARNING]\
> 默认情况下，统计卡片只显示公共仓库的统计信息。要显示私有仓库的统计信息，你需要[部署自己的实例](#部署你自己的实例)并使用你自己的 GitHub API token。

> [!TIP]\
> **新功能**：使用 `include_managed_repos=true` 参数可以统计你在组织中管理的仓库！

> [!NOTE]\
> 可用的排名等级有 S（前 1%）、A+（12.5%）、A（25%）、A-（37.5%）、B+（50%）、B（62.5%）、B-（75%）、C+（87.5%）和 C（所有人）。此排名方案基于[日本学术评分](https://wikipedia.org/wiki/Academic_grading_in_Japan)系统。

### 隐藏特定统计

你可以通过 `&hide=` 查询参数来隐藏任何特定的统计信息，用逗号分隔多个值。

> 选项：`&hide=stars,commits,prs,issues,contribs`

```md
![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&hide=contribs,prs)
```

### 显示额外统计

你可以通过 `&show=` 查询参数来显示额外的统计信息，用逗号分隔多个值。

> 选项：`&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage`

```md
![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)
```

### 显示图标

要启用图标，你可以传递 `&show_icons=true` 参数，如下所示：

```md
![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&show_icons=true)
```

### 主题

通过内置主题，你可以自定义卡片的外观，无需进行任何[手动自定义](#自定义)。

使用 `&theme=THEME_NAME` 参数，如下所示：

```md
![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&show_icons=true&theme=radical)
```

#### 所有内置主题

<img src="https://res.cloudinary.com/anuraghazra/image/upload/v1595174536/grs-themes_l4ynja.png" alt="GitHub Readme Stats Themes" width="600px"/>

你可以查看[所有可用主题](../themes/README.md)的预览或查看[主题配置文件](../themes/index.js)。请注意，我们暂停了新主题的添加以减少维护工作；所有与新主题相关的拉取请求都将被关闭。

#### 响应式卡片主题

你可以创建适应 GitHub 明暗模式的动态主题：

##### 使用透明主题
```md
![GitHub stats](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&theme=transparent)
```

##### 使用 GitHub 主题上下文标签
```md
[![GitHub stats-Dark](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&theme=dark#gh-dark-mode-only)](https://github.com/FutureUnreal/github-readme-stats-enhanced#gh-dark-mode-only)
[![GitHub stats-Light](https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名&theme=default#gh-light-mode-only)](https://github.com/FutureUnreal/github-readme-stats-enhanced#gh-light-mode-only)
```

### 自定义

你可以通过 URL 参数自定义任何卡片的外观。

#### 常用选项

| 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `title_color` | 卡片标题颜色 | 字符串（十六进制颜色） | `2f80ed` |
| `text_color` | 正文文本颜色 | 字符串（十六进制颜色） | `434d58` |
| `icon_color` | 图标颜色（如果可用） | 字符串（十六进制颜色） | `4c71f2` |
| `border_color` | 卡片边框颜色。当启用 `hide_border` 时不适用 | 字符串（十六进制颜色） | `e4e2e2` |
| `bg_color` | 卡片背景颜色 | 字符串（十六进制颜色或 *角度,开始,结束* 形式的渐变） | `fffefe` |
| `hide_border` | 隐藏卡片边框 | 布尔值 | `false` |
| `theme` | 主题名称，从[所有可用主题](../themes/README.md)中选择 | 枚举 | `default` |
| `cache_seconds` | 手动设置缓存头（最小值：21600，最大值：86400） | 整数 | `21600` |
| `locale` | 在卡片中设置语言，你可以在[这里](#可用语言)查看完整的可用语言列表 | 枚举 | `en` |
| `border_radius` | 卡片的圆角 | 数字 | `4.5` |

> [!WARNING]\
> 我们使用缓存来减少服务器负载。我们的卡片默认缓存 6 小时（21600 秒）。另请注意，缓存被限制为最少 6 小时，最多 24 小时。如果你希望统计卡片上的数据更频繁地更新，你可以[部署自己的实例](#部署你自己的实例)并设置[环境变量](#禁用速率限制保护) `CACHE_SECONDS` 为你选择的值。

##### bg_color 中的渐变

你可以在 bg_color 选项中提供多个逗号分隔的值来渲染渐变，格式如下：

```
&bg_color=角度,颜色1,颜色2,颜色3...颜色10
```

#### Stats Card 专属选项

| 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hide` | 从统计中隐藏[指定项目](#隐藏特定统计) | 字符串（逗号分隔值） | `null` |
| `hide_title` | 隐藏统计卡片的标题 | 布尔值 | `false` |
| `card_width` | 手动设置卡片宽度 | 数字 | `500px (大约)` |
| `hide_rank` | 隐藏排名并自动调整卡片宽度 | 布尔值 | `false` |
| `rank_icon` | 显示替代排名图标（即 `github`、`percentile` 或 `default`） | 枚举 | `default` |
| `show_icons` | 在所有统计附近显示图标 | 布尔值 | `false` |
| `include_all_commits` | 统计总提交数而不是仅当年提交数 | 布尔值 | `false` |
| `line_height` | 设置文本之间的行高 | 整数 | `25` |
| `exclude_repo` | 排除指定仓库 | 字符串（逗号分隔值） | `null` |
| `custom_title` | 为卡片设置自定义标题 | 字符串 | `<username> GitHub Stats` |
| `text_bold` | 使用粗体文本 | 布尔值 | `true` |
| `disable_animations` | 禁用卡片中的所有动画 | 布尔值 | `false` |
| `ring_color` | 排名圆圈的颜色 | 字符串（十六进制颜色） | `2f80ed` |
| `number_format` | 在两种可用格式之间切换以显示卡片值 `short`（即 `6.6k`）和 `long`（即 `6626`） | 枚举 | `short` |
| `show` | 在统计卡片上显示[额外项目](#显示额外统计)（即 `reviews`、`discussions_started`、`discussions_answered`、`prs_merged` 或 `prs_merged_percentage`） | 字符串（逗号分隔值） | `null` |

> [!NOTE]\
> 当 hide_rank=`true` 时，最小卡片宽度为 270 px + 标题长度和填充。

#### Repo Card 专属选项

| 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show_owner` | 显示仓库所有者姓名 | 布尔值 | `false` |
| `description_lines_count` | 手动设置描述的行数。指定值将被限制在 1 到 3 之间。如果未指定此参数，行数将根据描述的实际长度自动调整 | 数字 | `null` |

#### Gist Card 专属选项

| 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `show_owner` | 显示 gist 所有者姓名 | 布尔值 | `false` |

#### Language Card 专属选项

| 名称 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hide` | 从卡片中隐藏[指定语言](#隐藏特定语言) | 字符串（逗号分隔值） | `null` |
| `hide_title` | 隐藏卡片标题 | 布尔值 | `false` |
| `layout` | 在五种可用布局之间切换 `normal` & `compact` & `donut` & `donut-vertical` & `pie` | 枚举 | `normal` |
| `card_width` | 手动设置卡片宽度 | 数字 | `300` |
| `langs_count` | 在卡片上显示更多语言，1-20 之间 | 整数 | `normal` 和 `donut` 为 `5`，其他布局为 `6` |
| `exclude_repo` | 排除指定仓库 | 字符串（逗号分隔值） | `null` |

# GitHub Extra Pins

GitHub Extra Pins 允许你在个人资料中置顶超过 6 个仓库。

是的！你不再受限于只能置顶 6 个仓库。

### 使用方法

将此代码复制粘贴到你的 README 中，并修改链接。

端点：`api/pin?username=你的用户名&repo=仓库名`

```md
[![Readme Card](https://github-readme-stats-enhanced.vercel.app/api/pin/?username=你的用户名&repo=仓库名)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 演示

![Readme Card](https://github-readme-stats-enhanced.vercel.app/api/pin/?username=FutureUnreal&repo=github-readme-stats-enhanced)

使用 [show_owner](#repo-card-exclusive-options) 查询选项来包含仓库所有者的用户名

![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=FutureUnreal&repo=github-readme-stats-enhanced&show_owner=true)

# GitHub Gist Pins

GitHub Gist Pins 允许你在个人资料中置顶 Gist。

### 使用方法

将此代码复制粘贴到你的 README 中，并修改链接。

端点：`api/gist?id=bbfce31e0217a3689c8d961a356cb10d`

```md
[![Gist Card](https://github-readme-stats-enhanced.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)](https://gist.github.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/)
```

### 演示

![Gist Card](https://github-readme-stats-enhanced.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d)

使用 [show_owner](#gist-card-exclusive-options) 查询选项来包含 gist 所有者的用户名

![Gist Card](https://github-readme-stats-enhanced.vercel.app/api/gist?id=bbfce31e0217a3689c8d961a356cb10d&show_owner=true)

# Top Languages Card

Top Languages Card 显示了 GitHub 用户最常用的编程语言。

> [!WARNING]\
> 默认情况下，语言卡片只显示公共仓库的语言统计。要包含私有仓库的语言统计，你需要[部署自己的实例](#部署你自己的实例)并使用你自己的 GitHub API token。

> [!NOTE]\
> Top Languages 不代表用户的技能水平，它只是一个 GitHub 指标，用于确定哪些语言在 GitHub 上拥有最多代码。这是 github-readme-stats 的一个功能。

> [!WARNING]\
> 默认情况下，此卡片只显示你自己的非 fork 仓库中的语言使用情况，不依赖于提交的作者是谁。它不包括你对其他用户/组织仓库的贡献。
>
> **🆕 增强功能**：使用 `include_managed_repos=true` 参数可以包含你在组织中管理的仓库（ADMIN/MAINTAIN 权限）的语言统计！

> [!TIP]\
> **🆕 新功能**：现在你可以使用 `include_managed_repos=true` 参数来统计你在组织中管理的仓库的语言使用情况！

## 基础用法

将此代码复制粘贴到你的 README 中，并修改链接。

端点：`api/top-langs?username=你的用户名`

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

## 🆕 包含管理仓库

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&include_managed_repos=true)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 语言统计算法

我们使用以下算法来计算语言卡片上的语言百分比：

```js
ranking_index = (byte_count ^ size_weight) * (repo_count ^ count_weight)
```

默认情况下，只使用字节数来确定语言卡片上显示的语言百分比（即 `size_weight=1` 和 `count_weight=0`）。但是，你可以使用 `&size_weight=` 和 `&count_weight=` 选项来权衡语言使用计算。值必须是正实数。

*   `&size_weight=1&count_weight=0` - *(默认)* 按字节数排序。
*   `&size_weight=0.5&count_weight=0.5` - *(推荐)* 使用字节数和仓库数进行排名
*   `&size_weight=0&count_weight=1` - 按仓库数排序

```md
![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&size_weight=0.5&count_weight=0.5)
```

### 排除特定仓库

你可以使用 `&exclude_repo=repo1,repo2` 参数来排除特定仓库。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&exclude_repo=仓库1,仓库2)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 隐藏特定语言

你可以使用 `&hide=language1,language2` 参数来隐藏特定语言。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&hide=javascript,html)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 显示更多语言

你可以使用 `&langs_count=` 选项来增加或减少卡片上显示的语言数量。有效值为 1 到 10 之间的整数，默认为 5。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&langs_count=8)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 紧凑布局

你可以使用 `&layout=compact` 选项来更改卡片设计。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&layout=compact)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 甜甜圈图布局

你可以使用 `&layout=donut` 选项来更改卡片设计。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&layout=donut)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 垂直甜甜圈图布局

你可以使用 `&layout=donut-vertical` 选项来更改卡片设计。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&layout=donut-vertical)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 饼图布局

你可以使用 `&layout=pie` 选项来更改卡片设计。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&layout=pie)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 隐藏进度条

你可以使用 `&hide_progress=true` 选项来隐藏百分比和进度条（布局将自动设置为 `compact`）。

```md
[![Top Langs](https://github-readme-stats-enhanced.vercel.app/api/top-langs/?username=你的用户名&hide_progress=true)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

# WakaTime Stats Card

> [!WARNING]\
> 请注意，我们目前只显示公开的 WakaTime 配置文件数据。因此，你需要确保**同时**启用 `Display code time publicly` 和 `Display languages, editors, os, categories publicly`。

将 `?username=` 的值更改为你的 [WakaTime](https://wakatime.com) 用户名。

```md
[![WakaTime stats](https://github-readme-stats-enhanced.vercel.app/api/wakatime?username=你的用户名)](https://github.com/FutureUnreal/github-readme-stats-enhanced)
```

### 演示

![Harlok's WakaTime stats](https://github-readme-stats-enhanced.vercel.app/api/wakatime?username=ffflabs)

![Harlok's WakaTime stats](https://github-readme-stats-enhanced.vercel.app/api/wakatime?username=ffflabs&hide_progress=true)

*   紧凑布局

![Harlok's WakaTime stats](https://github-readme-stats-enhanced.vercel.app/api/wakatime?username=ffflabs&layout=compact)

# 全部演示

## 快速提示（对齐卡片）

默认情况下，GitHub 不会并排显示卡片。要做到这一点，你可以使用这种方法：

```html
<a href="https://github.com/FutureUnreal/github-readme-stats-enhanced">
  <img height=200 align="center" src="https://github-readme-stats-enhanced.vercel.app/api?username=你的用户名" />
</a>
<a href="https://github.com/FutureUnreal/github-readme-stats-enhanced">
  <img height=200 align="center" src="https://github-readme-stats-enhanced.vercel.app/api/top-langs?username=你的用户名&layout=compact&langs_count=8&card_width=320" />
</a>
```

# 部署你自己的实例

## 在 Vercel 上部署

### :film\_projector: [查看 @codeSTACKr 的分步视频教程](https://youtu.be/n6d4KHSKqGk?t=107)

由于 GitHub API 每小时只允许 5k 请求，**强烈建议部署自己的实例**以获得最佳体验，特别是在使用管理仓库功能时。

> [!NOTE]\
> 如果你使用的是 [Pro（即付费）](https://vercel.com/pricing) Vercel 计划，当你的 Vercel 实例在卡片请求期间频繁超时时，可以增加 vercel.json 中的 [maxDuration](https://vercel.com/docs/concepts/projects/project-configuration#value-definition) 值。建议将此值保持在 `30` 秒以下，以防止高内存使用。

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/FutureUnreal/github-readme-stats-enhanced)

<details>
 <summary><b>:hammer_and_wrench: 设置你自己的 Vercel 实例的分步指南</b></summary>

1.  前往 [vercel.com](https://vercel.com/)。
2.  点击 `Log in`。
    ![](https://files.catbox.moe/pcxk33.png)
3.  点击 `Continue with GitHub` 通过 GitHub 登录。
    ![](https://files.catbox.moe/b9oxey.png)
4.  登录 GitHub 并允许访问所有仓库（如果出现提示）。
5.  Fork 这个仓库。
6.  返回到你的 [Vercel 仪表板](https://vercel.com/dashboard)。
7.  要导入项目，点击 `Add New...` 按钮并选择 `Project` 选项。
    ![](https://files.catbox.moe/3n76fh.png)
8.  点击 `Continue with GitHub` 按钮，搜索所需的 Git 仓库并点击 `Import` 按钮导入它。或者，你可以使用页面底部的 `Import Third-Party Git Repository ->` 链接导入第三方 Git 仓库。
    ![](https://files.catbox.moe/mg5p04.png)
9.  在[这里](https://github.com/settings/tokens/new)创建个人访问令牌（PAT）并启用 `repo` 和 `read:org` 权限（这允许访问查看私有仓库和用户统计信息，并且是管理仓库功能所必需的）。
10. 将 PAT 添加为名为 `PAT_1` 的环境变量（如图所示）。
    ![](https://files.catbox.moe/0yclio.png)
11. 点击部署，你就完成了。查看你的域名以使用 API！

</details>

## 在其他平台部署

> [!WARNING]\
> 这种部署方式支持有限，仅为无法使用 Vercel 的情况提供。我们建议使用 Vercel 以获得最佳体验。

<details>
<summary><b>:hammer_and_wrench: 在其他平台部署的分步指南</b></summary>

1.  根据需要 Fork 或克隆此仓库
2.  将 `express` 添加到 `package.json` 的依赖项部分
3.  如果需要，运行 `npm i`（初始设置）
4.  运行 `node express.js` 启动服务器，或者如果你在托管服务上部署，在 `package.json` 中将入口点设置为 `express.js`
5.  你完成了 🎉
    </details>

## 禁用速率限制保护

Github Readme Stats 包含几个 Vercel 环境变量，可用于删除速率限制保护：

*   `CACHE_SECONDS`：此环境变量优先于我们的缓存最小值和最大值，可以绕过自托管 Vercel 实例的这些值。

请参阅 [Vercel 文档](https://vercel.com/docs/concepts/projects/environment-variables)了解如何将这些环境变量添加到你的 Vercel 实例。

# 🤝 贡献与支持

## 致谢

本项目基于 [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)。感谢原作者的优秀工作！

## 如何支持

如果这个项目对你有帮助，你可以：

1. ⭐ 给这个项目点个星
2. 🐛 报告 bug 或提出功能建议
3. 🔀 提交 Pull Request
4. 📢 分享给其他人

感谢你的支持！ 🙏
