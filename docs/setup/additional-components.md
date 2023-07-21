---
Order: 7
Area: setup
title: 附加组件
id: 243B79C2-819F-4257-B80D-2CD9CCB04C84
PageTitle: Setting up additional components to use with Visual Studio Code
DateApproved: 7/6/2023
description: 设置与Visual Studio Code一起使用的其他组件。
sidebar_position: 7
---

# 其他组件和工具

根据设计，Visual Studio Code是一个很小的下载，并且只包含在大多数开发工作流中共享的最小数量的组件。包括编辑器、文件管理、窗口管理和首选项设置等基本功能。JavaScript/TypeScript语言服务和Node.js调试器也是基本安装的一部分。

如果您习惯于使用大型的单片开发工具(ide)，您可能会惊讶于您的场景没有得到开箱即用的完全支持。例如，没有一个 **文件** > **新建项目** 对话框与预安装的项目模板。大多数VS Code用户将需要根据他们的具体需求安装额外的组件。

## 常用部件

Here are a few commonly installed components:

- [Git](https://git-scm.com/download) -VS Code内置了对使用Git进行源代码控制的支持，但是需要单独安装Git。
- [Node.js (includes npm)](https://nodejs.org/) - 用于构建和运行JavaScript应用程序的跨平台运行时。
- [TypeScript](https://www.typescriptlang.org) - TypeScript编译器`tsc`，用于将TypeScript转换为JavaScript。

您可以在我们的文档和演练中经常找到上述组件。

## VS Code 扩展

你可以通过[extensions](/docs/editor/extension-marketplace.md)扩展VS Code编辑器。VSCode社区已经在VSCode[市场](https://marketplace.visualstudio.com/VSCode)上建立了数百个有用的扩展。

<div class="marketplace-extensions-top"></div>

上面显示的扩展是目前最流行的市场。点击上面的扩展tile来阅读扩展的描述和评论。

## 额外的工具

Visual Studio Code与现有的工具链集成。我们认为以下工具将增强您的开发经验。

- [Yeoman](https://yeoman.io/) - 一个应用脚手架工具，命令行版本的 **File** > **New Project**。
- [generator-hottowel](https://github.com/johnpapa/generator-hottowel) - 一个用于快速创建AngularJS应用程序的生成器。
- [Express](https://expressjs.com/) - 一个使用Pug模板引擎的Node.js应用程序框架。
- [Gulp](https://gulpjs.com/) - 一个流任务运行器系统，可以很容易地与VS Code任务集成。
- [Mocha](https://mochajs.org/) - 一个运行在Node.js上的JavaScript测试框架。
- [Yarn](https://yarnpkg.com/) - 一个依赖管理器，是npm的替代品。

> **Note:** Most of these tools require Node.js and the npm package manager to install and use.

## 下一个步骤

- [User Interface](/docs/getstarted/userinterface.md) - A quick orientation around VS Code.
- [User/Workspace Settings](/docs/getstarted/settings.md) - Learn how to configure VS Code to your preferences through settings.
- [Languages](/docs/languages/overview.md) - VS Code supports many programming languages out-of-the-box as well as many more through community created extensions.
