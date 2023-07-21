---
Order: 8
Area: setup
title: 企业支持
id: 936ab8e0-3bbe-4842-bb17-ea314665c20a
PageTitle: Visual Studio Code enterprise support
DateApproved: 7/6/2023
description: 了解Visual Studio Code的企业支持特性。
sidebar_position: 8
---

# 企业支持

Visual Studio Code可以作为各种规模的企业团队的开发工具。作为IT管理员，你可以配置VS Code来实现整个组织的一致性和兼容性。

## Network: 常见的 hostnames

VS Code中的一些特性需要网络通信才能工作，比如自动更新机制、查询和安装扩展以及遥测。要使这些特性在代理环境中正常工作，必须正确配置产品。

请参考[网络常用主机名列表](/docs/setup/network.md#common-hostnames)了解所需的域。

## Windows上的组策略

系统管理员需要一种方法来控制其组织中所有客户机的默认软件设置。组策略是一种客户端解决方案，它使管理员能够灵活地为每个可用策略和设置实现行为。

VS Code现在支持基于[Windows注册表的组策略](https://learn.microsoft.com/previous-versions/windows/desktop/policy/implementing-registry-based-policy). 从VS Code 1.69版本开始，每个版本都会附带一个' `policies` '目录，其中包含ADMX模板文件，可以添加到以下路径:' `C:\Windows\PolicyDefinitions` '。

一旦安装了策略定义，管理员就可以使用[本地组策略编辑器](<https://learn.microsoft.com/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn265982(v=ws.11)>)来管理策略值。

可以在计算机级别和用户级别设置策略。如果两者都设置，计算机级别将优先。当策略值被设置时，该值将覆盖VS Code [setting](/docs/getstarted/settings.md)在任何级别(默认，用户，工作区等)配置的值。

## 额外的政策

目标是将当前的VS Code设置提升为策略，并密切关注现有的设置，以便命名和行为保持一致。如果有要求制定更多的政策，请在VS Code [GitHub存储库](https://github.com/microsoft/vscode)中打开一个问题。团队将确定是否已经有相应的行为设置，或者是否应该创建一个新的设置来控制期望的行为。
