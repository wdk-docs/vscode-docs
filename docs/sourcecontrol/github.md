---
Order: 3
Area: sourcecontrol
title: 在GitHub上合作
id: bd1be8cf-b745-4737-be48-db381ec3acc6
PageTitle: Collaborate on GitHub
DateApproved: 7/6/2023
description: 在Visual Studio代码中使用GitHub拉请求和问题
sidebar_position: 3
---

# 在VS Code中使用GitHub

[GitHub](https://github.com)是一个基于云的服务，用于存储和共享源代码。
与Visual Studio Code一起使用GitHub可以让您在编辑器中共享源代码并与其他人协作。
有很多方法可以与GitHub交互，例如，通过他们的网站[https://github.com](https://github.com)或[Git](https://git-scm.com)命令行界面(CLI)，但在VS Code中，丰富的GitHub集成是由[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)扩展提供的。

<a class="install-extension-btn" href="vscode:extension/GitHub.vscode-pull-request-github">安装GitHub Pull Requests and Issues扩展</a>

要在VS Code中开始使用GitHub，您需要安装[Git](https://git-scm.com/download)，[创建GitHub帐户](https://docs.github.com/get-started/signing-up-for-github/signing-up-for-a-new-github-account)并安装[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)扩展。在这个主题中，我们将演示如何在不离开VS Code的情况下使用GitHub的一些你最喜欢的部分。

如果你是源代码控制的新手，或者想了解更多关于VS Code的基本Git支持，你可以从[源代码控制](/docs/sourcecontrol/overview.md)主题开始。

## 开始与GitHub拉请求和问题

一旦你安装了[GitHub拉请求和问题](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)扩展，你需要登录。按照提示在浏览器中使用GitHub进行身份验证，然后返回VS Code。

![分机登录](images/github/extension-signin.png)

如果你没有重定向到VS Code，你可以手动添加授权令牌。在浏览器窗口中，您将收到授权令牌。复制令牌，然后切换回VS Code。在状态栏中选择 **Signing in to github.com...** ，粘贴令牌，然后点击 `kbstyle(Enter)`。

## 设置存储库

### 克隆存储库

You can search for and clone a repository from GitHub using the **Git: Clone** command in the Command Palette (`kb(workbench.action.showCommands)`) or by using the **Clone Repository** button in the Source Control view (available when you have no folder open).

![Clone Repository button in the Source Control view](images/github/git-clone-button.png)

From the GitHub repository dropdown you can filter and pick the repository you want to clone locally.

![GitHub repository dropdown filtered on microsoft/vscode](images/github/github-repo-dropdown.png)

### 使用现有存储库进行身份验证

Enabling authentication through GitHub happens when you run any Git action in VS Code that requires GitHub authentication, such as pushing to a repository that you're a member of or cloning a private repository. You don't need to have any special extensions installed for authentication; it is built into VS Code so that you can efficiently manage your repository.

When you do something that requires GitHub authentication, you'll see a prompt to sign in:

![Authentication Prompt](images/github/auth-prompt.png)

Follow the steps to sign into GitHub and return to VS Code. If authenticating with an existing repository doesn't work automatically, you may need to manually provide a personal access token. See [Personal Access Token authentication](https://github.com/microsoft/vscode-pull-request-github/wiki#personal-access-token-authentication) for more information.

Note that there are several ways to authenticate to GitHub, including using your username and password with two-factor authentication (2FA), a personal access token, or an SSH key. See [About authentication to GitHub](https://docs.github.com/github/authenticating-to-github/about-authentication-to-github) for more information and details about each option.

> **Note**: If you'd like to work on a repository without cloning the contents to your local machine, you can install the [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=github.remotehub) extension to browse and edit directly on GitHub. You can learn more below in the [GitHub Repositories extension](/docs/sourcecontrol/github.md#github-repositories-extension) section.

## 编辑器集成

### 悬停

当您打开了一个存储库，并且用户是 @-mentioned, 你可以悬停在这个用户名上，看到一个github风格的悬停。

![User Hover](images/github/user-hover.png)

对于 #-mentioned 问题号、完整的GitHub问题url和存储库指定的问题，也有类似的悬停。

![Issue Hover](images/github/issue-hover.png)

### 建议

用户建议由"@"字符触发，问题建议由"#" 字符触发。建议可以在编辑器和 **Source Control** 视图的输入框中找到。

![User and Issue suggestions](images/github/user-issue-suggest.gif)

The issues that appear in the suggestion can be configured with the **GitHub Issues: Queries** (`githubIssues.queries`) [setting](/docs/getstarted/settings.md). The queries use the [GitHub search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

You can also configure which files show these suggestions using the settings **GitHub Issues: Ignore Completion Trigger** (`githubIssues.ignoreCompletionTrigger`) and **GitHub Issues: Ignore User Completion Trigger** (`githubIssues.ignoreUserCompletionTrigger`). These settings take an array of [language identifiers](/docs/languages/identifiers.md) to specify the file types.

```jsonc
// Languages that the '#' character should not be used to trigger issue completion suggestions.
"githubIssues.ignoreCompletionTrigger": [
  "python"
]
```

## 拉请求

从 **Pull Requests** 视图中，您可以查看、管理和创建Pull request。

![Pull Request View](images/github/pull-request-view.png)

The queries used to display pull requests can be configured with the **GitHub Pull Requests: Queries** (`githubPullRequests.queries`) setting and use the [GitHub search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

```json
"githubPullRequests.queries": [
    {
        "label": "Assigned To Me",
        "query": "is:open assignee:${user}"
    },
```

### 创建拉取请求

Once you have committed changes to your fork or branch, you can use the **GitHub Pull Requests: Create Pull Request** command or the **Create Pull Request** button in the **Pull Requests** view to create a pull request.

![Create Pull Request button in the Pull Request view](images/github/create-pull-request-button.png)

A new **Create Pull Request** view will be displayed where you can select the repository and branch you'd like your pull request to target as well as fill in details such as the title, description, and whether it is a draft PR. If your repository has a pull request template, this will automatically be used for the description.

![Create Pull Request view](images/github/create-pull-request-view.png)

Once you select **Create**, if you have not already pushed your branch to a GitHub remote, the extension will ask if you'd like to publish the branch and provides a dropdown to select the specific remote.

The **Create Pull Request** view now enters **Review Mode**, where you can review the details of the PR, add comments, reviewers, and labels, and merge the PR once it's ready.

After the PR is merged, you'll have the option to delete both the remote and local branch.

### 回顾

拉请求可以从 **拉请求** 视图中查看。您可以分配审稿人和标签，添加评论，批准，关闭和合并所有来自拉取请求 **描述**。

![Pull Request Description editor](images/github/pull-request-description-editor.png)

From the **Description** page, you can also easily checkout the pull request locally using the **Checkout** button. This will switch VS Code to open the fork and branch of the pull request (visible in the Status bar) in **Review Mode** and add a new **Changes in Pull Request** view from which you can view diffs of the current changes as well as all commits and the changes within these commits. Files that have been commented on are decorated with a diamond icon. To view the file on disk, you can use the **Open File** inline action.

![Changes in Pull Request view](images/github/changes-view.png)

The diff editors from this view use the local file, so file navigation, IntelliSense, and editing work as normal. You can add comments within the editor on these diffs. Both adding single comments and creating a whole review is supported.

When you are done reviewing the pull request changes you can merge the PR or select **Exit Review Mode** to go back to the previous branch you were working on.

## 问题

### 创建问题

Issues can be created from the **+** button in the **Issues** view and by using the **GitHub Issues: Create Issue from Selection** and **GitHub Issues: Create Issue from Clipboard** commands. They can also be created using a Code Action for "TODO" comments. When creating issues, you can take the default description or select the **Edit Description** pencil icon in the upper right to bring up an editor for the issue body.

![Create Issue from TODO](images/github/issue-from-todo.gif)

You can configure the trigger for the Code Action using the **GitHub Issues: Create Issue Triggers** (`githubIssues.createIssueTriggers`) setting.

The default issue triggers are:

```json
"githubIssues.createIssueTriggers": [
  "TODO",
  "todo",
  "BUG",
  "FIXME",
  "ISSUE",
  "HACK"
]
```

### 解决问题

在 **Issues** 视图中，您可以看到您的问题并对其进行处理。

![Issue view with hover](images/github/issues-view.png)

By default, when you start working on an issue (**Start Working on Issue** context menu item), a branch will be created for you, as shown in the Status bar in the image below.

![Work on Issue](images/github/working-on-issue.png)

The Status bar also shows the active issue and if you select that item, a list of issue actions are available such as opening the issue on the GitHub website or creating a pull request.

![Issue Status bar actions](images/github/issue-status-bar-actions.png)

You can configure the name of the branch using the **GitHub Issues: Issue Branch Title** (`githubIssues.issueBranchTitle`) setting. If your workflow doesn't involve creating a branch, or if you want to be prompted to enter a branch name every time, you can skip that step by turning off the **GitHub Issues: Use Branch For Issues** (`githubIssues.useBranchForIssues`) setting.

Once you are done working on the issue and want to commit a change, the commit message input box in the **Source Control** view will be populated with a message, which can be configured with **GitHub Issues: Working Issue Format SCM** (`githubIssues.workingIssueFormatScm`).

## GitHub仓库扩展

The [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=github.remotehub) extension lets you quickly browse, search, edit, and commit to any remote GitHub repository directly from within Visual Studio Code, without needing to clone the repository locally. This can be fast and convenient for many scenarios, where you just need to review source code or make a small change to a file or asset.

![GitHub Repositories extension](images/github/github-repositories-extension.png)

### 打开存储库

一旦你安装了GitHub仓库扩展，你可以打开一个仓库与 **GitHub Repositories: Open Repository...** 命令从命令调色板 (`kb(workbench.action.showCommands)`) 或通过单击状态栏左下角的Remote指示器。

![状态栏中的远程指示器](images/github/remote-indicator.png)

当您运行 **Open Repository** 命令时，您可以选择是否从GitHub打开存储库，从GitHub打开Pull Request，或者重新打开先前连接的存储库。

如果你之前没有从VS Code登录到GitHub，你会被提示用你的GitHub账户进行身份验证。

![GitHub Repository extension open repository dropdown](images/github/open-github-repository-dropdown.png)

您可以直接提供存储库URL，或者通过在文本框中输入所需的存储库在GitHub中搜索。

一旦你选择了一个存储库或Pull Request, VS Code窗口将重新加载，你将在文件资源管理器中看到存储库的内容。然后，您可以打开文件(使用完整的语法高亮显示和括号匹配)、进行编辑和提交更改，就像处理存储库的本地克隆一样。

与使用本地存储库的一个不同之处在于，当您使用GitHub repository扩展提交更改时，更改将直接推送到远程存储库，类似于您在GitHub web界面中工作。

GitHub Repositories扩展的另一个特点是，每次你打开一个存储库或分支，你都可以从GitHub获得最新的源代码。您不需要像使用本地存储库那样记住拉出以进行刷新。

The GitHub Repositories extension supports viewing and even committing LFS-tracked files without needing to install [Git LFS](https://git-lfs.github.com) (Large File System) locally. Add the file types you want tracked with LFS to a [`.gitattributes` file](https://git-lfs.com), then commit your changes directly to GitHub using the Source Control view.

### 切换分支

您可以通过单击状态栏中的分支指示器轻松地在分支之间切换。GitHub Repositories扩展的一个重要特性是，您可以切换分支，而无需隐藏未提交的更改。扩展会记住您的更改，并在切换分支时重新应用它们。

![Branch indicator on the Status bar](images/github/branch-indicator-status-bar.png)

### 远程浏览器

您可以使用活动栏上可用的远程资源管理器快速重新打开远程存储库。这个视图显示了之前打开的存储库和分支。

![Remote Explorer view](images/github/github-remote-explorer.png)

### 创建拉取请求

如果您的工作流使用Pull Requests，而不是直接提交到存储库，您可以从Source Control视图创建一个新的PR。系统将提示您提供一个标题并创建一个新分支。

![在Source Control视图中创建Pull Request按钮](images/github/github-repositories-create-pull-request.png)

一旦你创建了一个拉请求，你可以使用[GitHub拉请求和问题](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)扩展来审查，编辑和合并你的PR描述[前面](/docs/sourcecontrol/github.md#pull-requests)在这个主题。

### 虚拟文件系统

如果本地机器上没有存储库的文件，GitHub知识库扩展将在内存中创建一个虚拟文件系统，以便您可以查看文件内容并进行编辑。使用虚拟文件系统意味着一些假定本地文件未启用或功能有限的操作和扩展。未启用任务、调试、集成终端等特性，您可以通过悬停“远程”指示器中的“**特性不可用**”链接了解对虚拟文件系统的支持程度。

![Remote indicator hover with features are not available link](images/github/features-not-available-hover.png)

扩展作者可以在[虚拟工作区扩展作者指南](https://github.com/microsoft/vscode/wiki/Virtual-Workspaces)中了解更多关于在虚拟文件系统和工作空间中运行的信息。.

### 继续努力...

有时，您希望切换到支持本地文件系统和完整语言和开发工具的开发环境中的存储库。GitHub知识库扩展使您可以轻松地:

- 创建一个GitHub代码空间(如果你有[GitHub代码空间扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)).
- 在本地克隆存储库。
- 将存储库克隆到Docker容器中 (如果你已经安装了[Docker](https://docker.com/)和微软的[Docker扩展](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)).

要切换开发环境，请使用 **Continue Working On...** 命令，可从命令调色板(`kb(workbench.action.showCommands)`)或通过单击状态栏中的Remote指示器获得。

![在Remote下拉菜单中继续工作](images/github/continue-working.png)

如果你使用的是[基于浏览器的编辑器](/docs/remote/codespaces.md#browserbased-editor), **"Continue Working On..."** 命令可以选择在本地或在[GitHub Codespaces](https://github.com/features/codespaces)的云托管环境中打开存储库。

![从网络编辑器继续工作](images/github/codespaces-continue.png)

当你第一次使用 **Continue Working On** 和未提交的更改时，你可以选择使用**Cloud changes **将你的编辑带到你选择的开发环境中，它使用VS Code服务来存储你的未决更改。

这些更改一旦应用到目标开发环境中，就会从我们的服务中删除。
如果您选择继续而不进行未提交的更改，您可以稍后通过配置设置`"workbench.cloudChanges.continueOn": "prompt"`更改此首选项.

## GitHub Copilot

在VS Code中，您可以使用人工智能(AI)来增强编码，例如对代码行或整个函数的建议，快速文档创建，以及帮助创建代码相关的工件(如测试)。

[GitHub Copilot](https://copilot.github.com/)是一个基于人工智能的代码完成工具，可以帮助您更快，更智能地编写代码。你可以在VS Code中使用[GitHub Copilot扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)来生成代码，或者从它生成的代码中学习。

![VS Code市场中的Copilot扩展](images/github/copilot-extension.png)

你可以在[Copilot文档](/docs/editor/artificial-intelligence.md)中了解更多关于如何开始使用Copilot的信息。
