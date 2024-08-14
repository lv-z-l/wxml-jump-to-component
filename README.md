# wxml-jump-to-component

**Jump to custom components in WeChat mini program wxml by command+click**

1.Plugin configuration

There is only one configuration 'wxml dump to component. lias', for example:
```json
  "wxml-jump-to-component.alias": {
    "@src": "./src",
    "@account": "./src/account",
    "@sdk": "./src/sdk",
    "@components": "./src/components",
    "@components-biz": "./src/components-biz",
    "@utils": "./src/utils",
    "@assets": "./src/assets",
    "@template": "./src/template"
  },
```
Open vscode settings.json and configure the correct path alias as shown in the code above.

2.Then you can use it

**Currently, component redirection in template templates is not supported because there is no JSON file available, so component paths cannot be obtained**