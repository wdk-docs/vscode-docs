---
Order:
title: 需求
id: 1D4850EE-85E2-4152-81BE-FECAE62EA99E
PageTitle: Requirements for Visual Studio Code
DateApproved: 7/6/2023
description: Visual Studio Code的硬件和平台(操作系统)要求。
---

# Visual Studio代码的要求

## 硬件

Visual Studio Code是一个小下载(小于200 MB)，磁盘占用小于500 MB。VS Code是轻量级的，应该很容易在今天的硬件上运行。

我们建议:

- 1.6 GHz或更快的处理器
- 1GB RAM

## 平台

VS Code支持以下平台:

- Windows 10 和 11 (32-bit 和 64-bit)
- OS X High Sierra (10.13+)
- Linux (Debian): Ubuntu Desktop 16.04, Debian 9
- Linux (Red Hat): Red Hat Enterprise Linux 7, CentOS 7, Fedora 34

## 不支持

- VS Code不支持应用虚拟化解决方案，比如 Microsoft App-V or MSIX for Windows, 或者第三方应用虚拟化技术.
- 在虚拟机环境中运行VS Code需要一个完整的操作系统。
- VS Code不支持多个用户同时在同一台机器上使用该软件，包括共享的虚拟桌面基础架构机或池化的Windows/Linux虚拟桌面主机池。
- 不支持在Windows/Linux容器中运行完整的VS Code，但支持使用[Dev containers](/docs/devcontainers/containers.md)扩展名运行。当使用Dev Containers扩展时，VS Code服务器在容器中运行，而VS Code客户端在桌面上。

### 其他Linux要求

- GLIBCXX版本3.4.21及以上
- GLIBC 2.17或更高版本

有关当前已知问题的列表，请参阅我们的[FAQ](FAQ)。
