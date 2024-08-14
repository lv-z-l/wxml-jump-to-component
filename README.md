# wxml-jump-to-component README

**Navigate to WeChat Mini Program custom components from WXML files!**

1.configure the extension
  only one setting `wxml-jump-to-component.alias`, like this:
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
  open vscode settings.json and copy the above code to it.

2.open a WXML file to test it

**Enjoy!**
