
# rpcm-root-require

> Very simple extension to the module "app-root-path" (all credits to the author)

Require the app files without the the need for knowing the root folder, just add the relative path to the script.

The module also provides a property with the root path.

## Install

```bash
npm install --save rpcm-root-require
```

## Usage

```js
const rootRequire = require("rpcm-root-require");
const myModule1 = rootRequire("root-folder/module1");
const myModule2 = rootRequire("root-folder/module2");

const rootPath = rootRequire.rootPath;
```
