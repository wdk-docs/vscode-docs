---
# DO NOT TOUCH — Managed by doc writer
id: d40b8849-6a4e-428c-b463-c8d61f18136f
DateApproved: 7/6/2023

# Summarize the whole topic in less than 300 characters for SEO purpose
description: Learn how to extend Visual Studio Code's HTML and CSS language support.
sidebar_position: 19
---

# 自定义数据扩展

[自定义数据格式](https://github.com/microsoft/vscode-custom-data)允许扩展作者无需编写代码即可轻松扩展VS Code的HTML / CSS语言支持。

The two [Contribution Points](/api/references/contribution-points) for using custom data in an extension are:

- `contributes.html.customData`
- `contributes.css.customData`

For example, by including this section in an extension's `package.json`:

```json
{
  "contributes": {
    "html": {
      "customData": ["./html.html-data.json"]
    },
    "css": {
      "customData": ["./css.css-data.json"]
    }
  }
}
```

VS Code will load the HTML/CSS entities defined in both files and provide language support such as auto-completion and hover information for those entities.

You can find the [custom-data-sample](https://github.com/microsoft/vscode-extension-samples/tree/main/custom-data-sample) at [microsoft/vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples).
