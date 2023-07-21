---
# DO NOT TOUCH — Managed by doc writer
id: 8027f6fb-6c9e-4106-8ef1-f9b0ba1b7085
DateApproved: 7/6/2023

# Summarize the whole topic in less than 300 characters for SEO purpose
description: 解释Visual Studio Code扩展(插件)的结构
sidebar_position: 2
---

# 扩展剖析

在上一个主题中，您能够运行一个基本的扩展。它是如何工作的呢?

`Hello World` 扩展做三件事:

- 注册 [`onCommand`](/api/references/activation-events#onCommand) [**激活事件**](/api/references/activation-events): `onCommand:helloworld.helloWorld`, 因此，当用户运行`Hello World`命令时，扩展将被激活。
- 使用[`contributes.commands`](/api/references/contribution-points#contributes.commands) [**贡献点**](/api/references/contribution-points) 使命令`Hello World`在命令面板中可用， 并将其绑定到命令I`helloworld.helloWorld`。
- 使用 [`commands.registerCommand`](/api/references/vscode-api#commands.registerCommand) [**VS Code API**](/api/references/vscode-api) 将一个函数绑定到注册的命令ID`helloworld.helloWorld`。

理解这三个概念对于在VS Code中编写扩展是至关重要的:

- [**激活事件**](/api/references/activation-events): 使您的扩展处于活动状态的事件。
- [**贡献点**](/api/references/contribution-points): 你在`package.json`中做的静态声明[扩展清单](#extension-manifest)来扩展VS Code.
- [**VS Code API**](/api/references/vscode-api): 一组可以在扩展代码中调用的JavaScript api。

一般来说，你的扩展会使用贡献点和VS Code API的组合来扩展VS Code的功能。
[扩展功能概述](/api/extension-capabilities/overview)主题可以帮助您找到适合扩展的贡献点和VS Code API。

让我们仔细看看`Hello World`示例的源代码，看看这些概念是如何应用于它的。

## 扩展的文件结构

```
.
├── .vscode
│   ├── launch.json     // Config for launching and debugging the extension
│   └── tasks.json      // Config for build task that compiles TypeScript
├── .gitignore          // Ignore build output and node_modules
├── README.md           // Readable description of your extension's functionality
├── src
│   └── extension.ts    // Extension source code
├── package.json        // Extension manifest
├── tsconfig.json       // TypeScript configuration
```

你可以阅读更多关于配置文件的信息:

- `launch.json` 用于配置VS Code[调试](/docs/editor/debugging)
- `tasks.json` 用于定义VS Code [Tasks](/docs/editor/tasks)
- `tsconfig.json` 查阅TypeScript[手册](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

然而，让我们把重点放在`package.json`和`extension.ts`上，它们对于理解`Hello World`扩展是必不可少的。

### 扩展清单

每个VS Code扩展必须有 `package.json` 作为其[扩展清单](/api/references/extension-manifest).
`package.json` 包含Node.js的混合字段，例如 `scripts` 和 `devDependencies` 和VS Code特定的字段，如 `publisher`, `activationEvents` 和 `contributes`.
你可以在[扩展清单参考](/api/references/extension-manifest)中找到所有VS Code特定字段的描述.
以下是一些最重要的领域:

- `name` 和 `publisher`: VS Code 使用 `<publisher>.<name>` 作为扩展的唯一ID。 例如，Hello World示例具有ID `vscode-samples.helloworld-sample`. VS Code使用ID来唯一标识你的扩展。
- `main`: 扩展入口点。
- `activationEvents` 和 `contributes`: [激活事件](/api/references/activation-events) 和 [贡献点](/api/references/contribution-points).
- `engines.vscode`: 这指定了扩展所依赖的VS Code API的最小版本。

```json
{
  "name": "helloworld-sample",
  "displayName": "helloworld-sample",
  "description": "HelloWorld example for VS Code",
  "version": "0.0.1",
  "publisher": "vscode-samples",
  "repository": "https://github.com/microsoft/vscode-extension-samples/helloworld-sample",
  "engines": {
    "vscode": "^1.51.0"
  },
  "categories": ["Other"],
  "activationEvents": [],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "helloworld.helloWorld",
        "title": "Hello World"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./"
  },
  "devDependencies": {
    "@types/node": "^8.10.25",
    "@types/vscode": "^1.51.0",
    "tslint": "^5.16.0",
    "typescript": "^3.4.5"
  }
}
```

> **请注意**: 如果你的扩展目标是1.74之前的VS Code版本，你必须在`activationEvents`明确列出 `onCommand:helloworld.helloWorld` .

## 扩展项文件

扩展项文件导出两个函数, `activate` 和 `deactivate`.
`activate` 在您注册的 **激活事件** 发生时执行。
`deactivate` 让您有机会在您的扩展被停用之前进行清理。
对于许多扩展，可能不需要显式清理， 和 `deactivate` 方法可以移除.
但是，如果扩展需要在VS Code关闭或扩展被禁用或卸载时执行操作，则使用此方法。

vscode扩展API在[@types/vscode](https://www.npmjs.com/package/@types/vscode)类型定义中声明。
`vscode`类型定义的版本由`package.json`中的`engines.vscode`字段中的值控制。
`vscode`类型在你的代码中为你提供了智能感知、转到定义和其他TypeScript语言特性。

```ts
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "helloworld-sample" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("helloworld.helloWorld", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World!");
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
```
