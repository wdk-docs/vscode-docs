---
# DO NOT TOUCH — Managed by doc writer
ContentId: 2447F8EB-15F1-4279-B621-126C7B8EBF4B
DateApproved: 7/6/2023

# Summarize the whole topic in less than 300 characters for SEO purpose
MetaDescription: 为Visual Studio Code扩展(插件)编写测试。
sidebar_position: 1
---

# 测试扩展

Visual Studio Code支持运行和调试扩展的测试。
这些测试将在一个名为 **扩展开发主机** 的VS Code的特殊实例中运行，并且可以完全访问VS Code API。
我们把这些测试称为集成测试，因为它们超越了可以在没有VS Code实例的情况下运行的单元测试。本文档的重点是VS Code集成测试。

## 概述

_如果你正在从`vscode`迁移, 看到 [从`vscode`迁移](#migrating-from-vscode)_.

如果您正在使用 [自耕农发电机](https://code.visualstudio.com/api/get-started/your-first-extension) 支撑一个扩展, 已经为您创建了集成测试。

在生成的扩展中，你可以使用`npm run test`或`yarn test`来运行以下集成测试:

- 下载并解压缩最新版本的VS Code。
- 运行扩展测试运行器脚本指定的[Mocha](https://mochajs.org)测试。

或者，您可以在[helloworld测试示例](https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-test-sample)中找到本指南的配置。 本文的其余部分将在示例上下文中解释这些文件:

- **测试脚本** ([`src/test/runTest.ts`](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/runTest.ts))
- **测试运行器脚本** ([`src/test/suite/index.ts`](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/index.ts))

## 测试脚本

VS Code为运行扩展测试提供了两个CLI参数， `--extensionDevelopmentPath` 和 `--extensionTestsPath`.

例如:

```bash
# - Launches VS Code Extension Host
# - Loads the extension at <EXTENSION-ROOT-PATH>
# - Executes the test runner script at <TEST-RUNNER-SCRIPT-PATH>
code \
--extensionDevelopmentPath=<EXTENSION-ROOT-PATH> \
--extensionTestsPath=<TEST-RUNNER-SCRIPT-PATH>
```

**测试脚本** ([`src/test/runTest.ts`](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/runTest.ts))使用 `@vscode/test-electron` API 简化下载过程,解压缩并启动带有扩展测试参数的VS Code:

```ts
import * as path from "path";

import { runTests } from "@vscode/test-electron";

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, "../../");

    // The path to the extension test runner script
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");

    // Download VS Code, unzip it and run the integration test
    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.error(err);
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
```

`@vscode/test-electron` API 还允许:

- 用一个特定的工作区启动VS Code。
- 下载不同版本的VS Code，而不是最新的稳定版本。
- 使用额外的CLI参数启动VS Code。

您可以在[microsoft/vscode-test](https://github.com/microsoft/vscode-test)中找到更多API使用示例.

## 测试运行器脚本

运行扩展集成测试时， `--extensionTestsPath` 指向**测试运行器脚本** ([`src/test/suite/index.ts`](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/index.ts)) 以编程方式运行测试套件。
下面是`helloworld-test-sample`的[测试运行程序脚本](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/index.ts)它使用Mocha来运行测试套件。
您可以将此作为起点，并使用[Mocha的API](https://mochajs.org/api/mocha)定制您的设置.
您还可以用任何其他可以以编程方式运行的测试框架替换Mocha。

```ts
import * as path from "path";
import * as Mocha from "mocha";
import * as glob from "glob";

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: "tdd",
    color: true,
  });

  const testsRoot = path.resolve(__dirname, "..");

  return new Promise((c, e) => {
    glob("**/**.test.js", { cwd: testsRoot }, (err, files) => {
      if (err) {
        return e(err);
      }

      // Add files to the test suite
      files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

      try {
        // Run the mocha test
        mocha.run((failures) => {
          if (failures > 0) {
            e(new Error(`${failures} tests failed.`));
          } else {
            c();
          }
        });
      } catch (err) {
        e(err);
      }
    });
  });
}
```

测试运行器脚本和`*.test.js`文件都可以访问VS Code API。

下面是一个示例测试 ([src/test/suite/extension.test.ts](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/extension.test.ts)):

```ts
import * as assert from "assert";
import { after } from "mocha";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../extension';

suite("Extension Test Suite", () => {
  after(() => {
    vscode.window.showInformationMessage("All tests done!");
  });

  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
```

## 调试测试

调试测试与调试扩展类似。

下面是一个调试器配置示例`launch.json` :

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test/suite/index"
      ],
      "outFiles": ["${workspaceFolder}/out/test/**/*.js"]
    }
  ]
}
```

<video autoplay loop muted playsinline controls>
  <source src="/api/working-with-extensions/testing-extension/debug.mp4" type="video/mp4" />
</video>

## 提示

### 使用内部版本进行扩展开发

由于VS Code的限制，如果你正在使用VS Code稳定版本，并试图 **在CLI** 上运行集成测试，它会抛出一个错误:

```
Running extension tests from the command line is currently only supported if no other instance of Code is running.
```

通常，如果从CLI运行扩展测试，则测试使用的版本不能已经在运行。
作为一种变通方法，你可以在VS Code Stable中运行测试，并使用 [VS Code Insiders](https://code.visualstudio.com/insiders/)进行开发。
只要你不是在VS Code Insiders中从CLI运行测试，而是在VS Code Stable中运行，这个设置就会工作得很好。

另一种选择是从VS Code本身的调试启动配置中运行扩展测试。
这还有一个额外的好处，您甚至可以调试测试。

### 调试时禁用其他扩展

当你在VS Code中调试一个扩展测试时，VS Code会使用全局安装的VS Code实例，并加载所有安装的扩展。
你可以加上 `--disable-extensions` 配置到 `launch.json` 或者是`@vscode/test-electron`'s `runTests` API 的 `launchArgs` 选项

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test/suite/index"
      ],
      "outFiles": ["${workspaceFolder}/out/test/**/*.js"]
    }
  ]
}
```

```ts
await runTests({
  extensionDevelopmentPath,
  extensionTestsPath,
  /**
   * A list of launch arguments passed to VS Code executable, in addition to `--extensionDevelopmentPath`
   * and `--extensionTestsPath` which are provided by `extensionDevelopmentPath` and `extensionTestsPath`
   * options.
   *
   * If the first argument is a path to a file/folder/workspace, the launched VS Code instance
   * will open it.
   *
   * See `code --help` for possible arguments.
   */
  launchArgs: ["--disable-extensions"],
});
```

### 使用它自定义设置 `@vscode/test-electron`

有时您可能希望运行自定义设置, 例如，在开始测试之前运行`code --install-extension`来安装另一个扩展。
`@vscode/test-electron`有一个更细粒度的API来适应这种情况:

```ts
import * as cp from "child_process";
import * as path from "path";
import { downloadAndUnzipVSCode, resolveCliArgsFromVSCodeExecutablePath, runTests } from "@vscode/test-electron";

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, "../../../");
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");
    const vscodeExecutablePath = await downloadAndUnzipVSCode("1.40.1");
    const [cliPath, ...args] = resolveCliArgsFromVSCodeExecutablePath(vscodeExecutablePath);

    // Use cp.spawn / cp.exec for custom setup
    cp.spawnSync(cliPath, [...args, "--install-extension", "<EXTENSION-ID-OR-PATH-TO-VSIX>"], {
      encoding: "utf-8",
      stdio: "inherit",
    });

    // Run the extension test
    await runTests({
      // Use the specified `code` executable
      vscodeExecutablePath,
      extensionDevelopmentPath,
      extensionTestsPath,
    });
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
```

### 从 `vscode` 迁移

[`vscode`](https://github.com/microsoft/vscode-extension-vscode)模块一直是运行扩展集成测试的默认方式，并且正在被[`@vscode/test-electron`](https://github.com/microsoft/vscode-test)所取代 . 以下是如何从它迁移的方法:

- 删除 `vscode` 依赖.
- 添加 `@vscode/test-electron` 依赖.
- 因为旧的`vscode`模块也用于下载VS Code类型定义，你需要
  - 手动安装 `@types/vscode` 这跟你的 `engines.vscode` 在 `package.json`. 例如, 如果你的 `engines.vscode` 是 `1.30`, 安装 `"@types/vscode": "^1.30.0"`.
  - 删除 `"postinstall": "node ./node_modules/vscode/bin/install"` 从 `package.json`.
- 添加一个[test script](#the-test-script). 你可以用 [`runTest.ts`](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/runTest.ts)在样本中作为起点。
- 指向`package.json`中的`test`脚本，运行`runTestts`的编译输出。
- 添加一个[test runner script](#the-test-runner-script). 你可以使用 [示例测试运行器脚本](https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/index.ts) 作为起点.请注意, `vscode` 过去常依赖于 `mocha@4` 和 `glob`, 现在你需要安装它们作为你的 `devDependencies`.

## 下一个步骤

- [持续集成](/api/working-with-extensions/continuous-integration) - 在持续集成服务(如Azure Dev Ops)中运行扩展测试。
