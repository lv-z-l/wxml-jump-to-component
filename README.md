# wxml-jump-to-component

**Main features**
1. In wxml files, command+click on a custom component can automatically open the corresponding file of the custom component.
2. Right-click on any folder in the workspace floder, you can quickly create Page, Component.

## Plugin configuration
### wxml-jump-to-component.alias
example:

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

### wxml-jump-to-component.createFileExtension
example:

```json
  "wxml-jump-to-component.createFileExtension": ["wxml", "ts", "json", "scss"],
```
sort is important!

### wxml-jump-to-component.openFileExtension
example:

```json
  // The default file types to open, js / ts / wxml / wxss / scss / other file types with the same name as the component. The modules under node_modules default to opening the js file corresponding to the path.
  "wxml-jump-to-component.openFileExtension": "ts",
```

**⚠️ Currently, component redirection in template templates is not supported because there is no JSON file available, so component paths cannot be obtained**