---
# DO NOT TOUCH — Managed by doc writer
id: DC915D6C-13D4-4022-9101-57C4A4118B07
DateApproved: 7/6/2023

# Summarize the whole topic in less than 300 characters for SEO purpose
description: Create your first Visual Studio Code extension (plug-in) with a simple Hello World example.
sidebar_position: 1
---

# 你的第一个扩展

在本主题中，我们将教你建筑扩展的基本概念。

确保你已经安装了[Node.js](https://nodejs.org)和[Git](https://git-scm.com/)，然后安装[Yeoman](https://yeoman.io/)和[VS Code Extension Generator](https://www.npmjs.com/package/generator-code):

```bash
npm install -g yo generator-code
```

生成器搭建一个TypeScript或JavaScript项目，为开发做好准备。运行生成器并为TypeScript项目填写一些字段:

```bash
yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Bundle the source code with webpack? No
# ? Which package manager to use? npm

# ? Do you want to open the new folder with Visual Studio Code? Open with `code`

```

然后，进入编辑器，按下按钮 `F5` `kb(workbench.action.debug.start)`.
这将在一个新 **Extension Development Host** 窗口中编译并运行扩展。

在新窗口的命令面板(`⇧⌘P` `kb(workbench.action.showCommands)`)中运行命令 **Hello World** :

<video loop muted playsinline controls title="Launch your first VS Code extension video">
  <source src="/api/get-started/images/launch.mp4" type="video/mp4" />
</video>

你应该看到 `Hello World from HelloWorld!` 通知出现. 成功!

## 开发扩展

让我们对消息进行更改:

1. 将`extension.ts`中的"Hello World from HelloWorld!"改为"Hello VS Code"。
2. 在新窗口中运行 **Developer: Reload Window** 命令.
3. 再次运行命令 **Hello World**.

您应该会看到更新后的消息出现。

<video loop muted playsinline controls title="Reload VS Code extension video">
  <source src="/api/get-started/images/reload.mp4" type="video/mp4" />
</video>

这里有一些建议供你尝试:

- 在命令面板中为 **Hello World** 命令指定一个新名称。
- [Contribute](/api/references/contribution-points) 另一个用信息消息显示当前时间的命令. 贡献点是你在 `package.json` [Extension Manifest](/api/references/extension-manifest) 中做的静态声明，用于扩展VS Code，例如向扩展中添加命令、菜单或键绑定。
- 将 `vscode.window.showInformationMessage` 替换为另一个 [VS Code API](/api/references/vscode-api)调用以显示警告消息。

## 调试扩展

VS Code的内置调试功能使调试扩展变得很容易。
通过点击一行旁边的gutter来设置断点，VS Code将击中断点。
您可以将鼠标悬停在编辑器中的变量上，或者使用左侧的 **Run and Debug** 视图来检查变量的值.
调试控制台允许您计算表达式。

<video loop muted playsinline controls title="Debug VS Code extension video">
  <source src="/api/get-started/images/debug.mp4" type="video/mp4" />
</video>

你可以在[Node.js调试主题](/docs/nodejs/nodejs-debugging)中了解更多关于在VS Code中调试Node.js应用程序的信息。

## 下一步

在下一个主题中，[扩展剖析](/api/get-started/extension-anatomy)，我们将仔细研究 `Hello World` 示例的源代码并解释关键概念。

您可以在此找到本教程的源代码: [https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample](https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample).
The [Extension Guides](/api/extension-guides/overview) 主题包含其他示例，每个示例都说明了不同的VS Code api或贡献点，并遵循我们的 [UX Guidelines](/api/ux-guidelines/overview)中的建议.

### 使用 JavaScript

在本指南中，我们主要描述如何使用TypeScript开发VS Code扩展，因为我们相信TypeScript为开发VS Code扩展提供了最好的体验。但是，如果你更喜欢JavaScript，你仍然可以使用[helloworld minimal sample](https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-minimal-sample).

### UX 的指导方针

这也是回顾我们的[UX指南](/api/ux-guidelines/overview)的好时机，这样你就可以开始按照VS Code的最佳实践来设计你的扩展用户界面了。
