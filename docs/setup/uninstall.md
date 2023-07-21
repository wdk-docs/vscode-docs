---
Order: 9
Area: setup
title: 卸载
id: 435486d3-ad55-4a31-a087-d108f75ba669
PageTitle: Uninstall Visual Studio Code
DateApproved: 7/6/2023
description: 卸载Visual Studio Code并清理。
sidebar_position: 9
---

# 卸载 Visual Studio Code

卸载Visual Studio Code的步骤将取决于您的平台(Windows、macOS或Linux)和您使用的安装选项。例如，在Windows上，您可以使用System或User Windows installer或下载一个“。zip”文件并将其内容解压缩到机器上的任何位置。

一般来说，你会像卸载任何其他桌面应用程序一样卸载VS Code，并遵循你的平台推荐的卸载流程。下面提供了具体的平台指导，以及如何[完全清理](#clean-uninstall)任何剩余的VS Code配置文件。

## Windows

### Windows 安装程序

如果你是通过Windows安装程序安装VS Code的，无论是用户版还是系统版，使用安装程序来删除VS Code。

- 开始菜单
  - Search for **Add or Remove Programs** and find Visual Studio Code in the **Apps** > **Apps & features** list.
  - Select **Uninstall** from the actions dropdown on the right side (three vertical dots).
  - Follow the prompts to uninstall VS Code.
- Control Panel
  - Under **Programs**, select the **Uninstall a program** link.
  - Find the Visual Studio Code entry, right-click, and select the **Uninstall** command.
  - Follow the prompts to uninstall VS Code.

### .zip 文件安装

If you installed VS Code on Windows by downloading and extracting one of the `.zip` files found on the [Visual Studio Code website](https://code.visualstudio.com/#alt-downloads), you can uninstall by deleting the folder where you extracted the `.zip` contents.

## macOS

要在macOS上卸载VS Code，打开 **Finder**，然后转到 **Applications**。右键单击Visual Studio Code应用程序并选择 **移动到垃圾桶**。

## Linux

To uninstall VS Code on Linux, you should use your package manager's uninstall or remove option. The exact command line will differ depending on which package manager you used (for example, `apt-get`, `rpn`, `dnf`, `yum`, etc.).

The names for the VS Code packages are:

- `code` - VS Code Stable release
- `code-insiders` - VS Code [Insiders](/insiders) release

For example, if you installed VS Code via the Debian package (`.deb`) and `apt-get` package manager, you would run:

```bash
sudo apt-get remove code
```

where `code` is the name of the VS Code Debian package.

## 干净卸载

If you want to remove all user data after uninstalling VS Code, you can delete the user data folders `Code` and `.vscode`. This will return you to the state before you installed VS Code. This can also be used to reset all settings if you don't want to uninstall VS Code.

The folder locations will vary depending on your platform:

- **Windows** - Delete `%APPDATA%\Code` and `%USERPROFILE%\.vscode`.
- **macOS** - Delete `$HOME/Library/Application Support/Code` and `~/.vscode`.
- **Linux** - Delete `$HOME/.config/Code` and `~/.vscode`.

## 下一个步骤

- [设置概述](/docs/setup/setup-overview.md) - General information about VS Code setup and updates.
- [Windows 设置](/docs/setup/windows.md) - Details and common questions about installing VS Code on Windows.
- [macOS 设置](/docs/setup/mac.md) - VS Code可用于英特尔和苹果的硅macOS机器。
- [Linux 设置](/docs/setup/linux.md) - Learn about the different VS Code packages available for Linux.
