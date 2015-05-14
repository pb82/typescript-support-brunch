typescript-support-brunch
=========================

An up-to-date typescript compiler plugin for brunch. Based on [typescript-compiler](https://www.npmjs.com/package/typescript-compiler).

Installation:

```
npm install --save typescript-support-brunch
```

Configuration:

You can set compiler options by using the `tscArgs` property.

```coffeescript
plugins:
  Typescript:
    tscArgs: "--module commonjs"
```
