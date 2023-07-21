---
Order: 1
Area: setup
title: 概述
id: FC5262F3-D91D-4665-A5D2-BCBCCF66E53A
PageTitle: Setting up Visual Studio Code
DateApproved: 7/6/2023
description: Get Visual Studio Code up and running.
MetaSocialImage: quicksetup_QuickSetup.png
sidebar_position: 1
---

# 概述

启动和运行Visual Studio Code是快速和容易的。这是一个小的下载，所以你可以在几分钟内安装并给VS Code一个尝试。

## 跨平台的

VS Code是一个免费的代码编辑器，可以运行在macOS, Linux和Windows操作系统上。

遵循以下平台特定指南:

- [macOS](/docs/setup/mac.md)
- [Linux](/docs/setup/linux.md)
- [Windows](/docs/setup/windows.md)

VS Code是轻量级的，应该在大多数可用的硬件和平台版本上运行。您可以查看[系统要求](/docs/supporting/requirements.md)以检查是否支持您的计算机配置。

## 更新节奏

VS Code[每个月]都会发布一个带有新特性和重要错误修复的新版本。大多数平台都支持自动更新，当新版本可用时，系统会提示您安装新版本。 您也可以通过运行**Help** > **Check for Updates** (Linux和Windows)或运行**Code** > **Check for Updates** (macOS)手动检查更新。

> 注意: 如果你想按照自己的时间表更新VS Code，你可以[禁用自动更新](/docs/supporting/faq.md#how-do-i-opt-out-of-vs-code-autoupdates)。

## 内部人员夜间构建

如果您想尝试我们的夜间构建，以尽早看到新功能或验证错误修复，您可以安装我们的[内部构建](/insiders)。内部构建与每月稳定构建并排安装，您可以在同一台机器上自由使用。内部版本和VS Code开发团队每天使用的版本是一样的，我们非常感谢人们尝试新功能并提供反馈。

## 可移植的模式

Visual Studio Code supports [Portable mode](https://en.wikipedia.org/wiki/Portable_application) installation. This mode enables all data created and maintained by VS Code to live near itself, so it can be moved around across environments, for example, on a USB drive. See the [VS Code Portable Mode](/docs/editor/portable.md) documentation for details.

## 附加组件

VS Code is an editor, first and foremost, and prides itself on a small footprint. Unlike traditional IDEs that tend to include everything but the kitchen sink, you can tune your installation to the development technologies you care about. Be sure to read the [Additional Components](/docs/setup/additional-components.md) topic after reading the platform guides to learn about customizing your VS Code installation.

## 扩展

VS Code [extensions](/docs/editor/extension-marketplace.md)允许第三方添加额外的支持:

- 语言 - [C++](/docs/languages/cpp.md), [C#](/docs/languages/csharp.md), [Go](/docs/languages/go.md), [Java](/docs/languages/java.md), [Python](/docs/languages/python.md)
- 工具 - [ESLint](https://marketplace.visualstudio.com/items/dbaeumer.vscode-eslint), [JSHint](https://marketplace.visualstudio.com/items/dbaeumer.jshint) , [PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)
- 调试器 - [PHP XDebug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug).
- Keymaps - [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim), [Sublime Text](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings), [IntelliJ](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings), [Emacs](https://marketplace.visualstudio.com/items?itemName=hiro-sun.vscode-emacs), [Atom](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Brackets](https://marketplace.visualstudio.com/items?itemName=ms-vscode.brackets-keybindings), [Visual Studio](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings), [Eclipse](https://marketplace.visualstudio.com/items?itemName=alphabotsec.vscode-eclipse-keybindings)

扩展集成到VS Code的UI、命令和任务运行系统中，所以你会发现通过VS Code的共享接口很容易使用不同的技术。查看VS Code扩展[Marketplace](https://marketplace.visualstudio.com/vscode)，看看有什么可用的。

## 下一个步骤

一旦你安装并设置了VS Code，这些主题将帮助你更多地了解VS Code:

- [附加组件](/docs/setup/additional-components.md) - 学习如何安装Git、Node.js、TypeScript和Yeoman等工具。
- [用户界面](/docs/getstarted/userinterface.md) - VS Code的快速入门。
- [基本编辑](/docs/editor/codebasics.md) - 了解强大的VS Code编辑器。
- [代码导航](/docs/editor/editingevolved.md) -快速浏览源代码。
- [调试](/docs/editor/debugging.md) - 直接在VS code编辑器中调试源代码。
- [代理服务器支持](/docs/setup/network.md) - 配置代理设置。

如果你想让一些东西快速运行，试试[Node.js教程](/docs/nodejs/nodejs-tutorial.md)，这将让你在几分钟内用VS Code调试一个Node.js web应用程序。

## 常见问题

### VS Code的系统要求是什么?

我们有一份[系统需求](/docs/supporting/requirements.md)清单.

### VS Code有多大?

VS Code是一个很小的下载(< 100 MB)，磁盘占用小于200 MB，所以你可以快速安装VS Code并试用它。

### 如何创建和运行新项目?

VS Code不包含传统的**File** > **New Project**对话框或预安装的项目模板。
You'll need to add [additional components](/docs/setup/additional-components.md) and scaffolders depending on your development interests. With scaffolding tools like [Yeoman](https://yeoman.io/) and the multitude of modules available through the [npm](https://www.npmjs.com/) package manager, you're sure to find appropriate templates and tools to create your projects.

### 我如何知道我正在运行的是哪个版本?

在Linux和Windows操作系统上，选择 **Help** > **About**. 在macOS上，使用 **Code** > **About Visual Studio Code**.

### 为什么VS Code说我的安装是不支持的?

VS Code检测到一些安装文件被修改了，可能是被扩展名修改了。重新安装VS Code将替换受影响的文件。请参阅我们的[FAQ主题](/docs/supporting/faq.md#installation-appears-to-be-corrupt-unsupported)了解更多细节。

### 我如何做一个“干净”卸载VS Code?

If you want to remove all user data after [uninstalling](/docs/setup/uninstall.md) VS Code, you can delete the user data folders `Code` and `.vscode`. This will return you to the state before you installed VS Code. This can also be used to reset all settings if you don't want to uninstall VS Code.

The folder locations will vary depending on your platform:

- **Windows** - Delete `%APPDATA%\Code` and `%USERPROFILE%\.vscode`.
- **macOS** - Delete `$HOME/Library/Application Support/Code` and `~/.vscode`.
- **Linux** - Delete `$HOME/.config/Code` and `~/.vscode`.
