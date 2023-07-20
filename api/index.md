---
# DO NOT TOUCH — Managed by doc writer
ContentId: AD26EFB1-FFC6-4284-BAB8-F3BCB8294728
DateApproved: 7/6/2023

# Summarize the whole topic in less than 300 characters for SEO purpose
MetaDescription: Visual Studio Code有一个丰富的扩展API。学习如何为VS Code创建自己的扩展。

sidebar_position: 1
---

# 扩展 API

Visual Studio Code is built with extensibility in mind. From the UI to the editing experience, almost every part of VS Code can be customized and enhanced through the Extension API. In fact, many core features of VS Code are built as [extensions](https://github.com/microsoft/vscode/tree/main/extensions) and use the same Extension API.

This documentation describes:

- 如何构建、运行、调试、测试和发布扩展
- 如何利用VS Code丰富的扩展API
- 在哪里可以找到[指南](https://code.visualstudio.com/api/extension-guides/overview) 和[代码示例](https://github.com/microsoft/vscode-extension-samples)来帮助您入门
- 遵循我们的[UX指南](/api/ux-guidelines/overview)的最佳实践

Code samples are available at [Microsoft/vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples).

If you are looking for published extensions, head to the [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode).

## 扩展可以做什么?

Here are some examples of what you can achieve with the Extension API:

- 用颜色或文件图标主题改变VS Code的外观 - [Theming](/api/extension-capabilities/theming)
- 在UI中添加自定义组件和视图 - [Extending the Workbench](/api/extension-capabilities/extending-workbench)
- 创建一个Webview来显示用HTML/CSS/JS构建的自定义网页 - [Webview Guide](/api/extension-guides/webview)
- 支持一种新的编程语言 - [Language Extensions Overview](/api/language-extensions/overview)
- 支持调试特定的运行时 - [Debugger Extension Guide](/api/extension-guides/debugger-extension)

如果你想对扩展API有一个更全面的概述，请参考[扩展能力概述](/api/extension-capabilities/overview)页面.
[扩展指南概述](/api/extension-guides/overview)还包含了一系列代码示例和指南，说明了各种扩展api的使用方法。

## 如何构建扩展?

构建一个好的扩展需要花费大量的时间和精力。以下是API文档的每个部分可以帮助您的内容:

- **开始** 教授使用[Hello World](https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample)示例构建扩展的基本概念。
- **扩展功能** 将VS Code的大量API划分为更小的类别，并指出更详细的主题。
- **扩展指南** 包括指南和代码示例，解释了VS code扩展API的具体用法。
- **UX指导** 展示了在扩展中提供出色用户体验的最佳实践。
- **语言扩展** 通过指南和代码示例说明如何添加对编程语言的支持。
- **测试和发布** 包括对各种扩展开发主题的深入指导，例如[testing](/api/working-with-extensions/testing-extension)和[publishing](/api/working-with-extensions/publishing-extension)扩展.
- **高级主题** 解释高级概念，如[扩展主机](/api/advanced-topics/extension-host), [支持远程开发和GitHub代码空间](/api/advanced-topics/remote-extensions), 和[建议的API](/api/advanced-topics/using-proposed-api).
- **参考文献** 包含详尽的[VS Code API](/api/references/vscode-api), [贡献点](/api/references/contribution-points)和许多其他主题的引用。

## 有什么新鲜事吗?

VS Code每月更新一次，这也适用于扩展API。每个月都有新的特性和AP可用，以增加VS Code扩展的功能和范围。

To stay current with the Extension API, you can review the monthly release notes, which have dedicated sections covering:

- [Extension authoring](https://code.visualstudio.com/updates#_extension-authoring) - Learn what new extension APIs are available in the latest release.
- [Proposed extension APIs](https://code.visualstudio.com/updates#_proposed-extension-apis) - Review and give feedback on upcoming proposed APIs.

## 寻求帮助

If you have questions for extension development, try asking on:

- [VS Code Discussions](https://github.com/microsoft/vscode-discussions): GitHub community to discuss VS Code's extension platform, ask questions, help other members of the community, and get answers.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/visual-studio-code): There are [thousands of questions](https://stackoverflow.com/questions/tagged/visual-studio-code) tagged `visual-studio-code`, and over half of them already have answers. Search for your issue, ask questions, or help your fellow developers by answering VS Code extension development questions!
- [VS Code Dev Slack](https://aka.ms/vscode-dev-community): Public chatroom for extension developers. VS Code team members often join in the conversations.

To provide feedback on the documentation, create new issues at [Microsoft/vscode-docs](https://github.com/microsoft/vscode-docs/issues).
If you have extension questions that you cannot find an answer for, or issues with the VS Code Extension API, please open new issues at [Microsoft/vscode](https://github.com/microsoft/vscode/issues).
