# session-store

![Node](https://img.shields.io/node/v/session-store.svg?style=flat-square)
[![NPM](https://img.shields.io/npm/v/session-store.svg?style=flat-square)](https://www.npmjs.com/package/session-store)
[![Travis](https://img.shields.io/travis/jolzee/session-store/master.svg?style=flat-square)](https://travis-ci.org/jolzee/session-store)
[![David](https://img.shields.io/david/jolzee/session-store.svg?style=flat-square)](https://david-dm.org/jolzee/session-store)
[![Coverage Status](https://img.shields.io/coveralls/jolzee/session-store.svg?style=flat-square)](https://coveralls.io/github/jolzee/session-store)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me/)
[![NPM](https://img.shields.io/npm/dt/session-store.svg?style=flat-square)](https://www.npmjs.com/package/session-store)

> Key Value data store for sessions using in memory or Redis

### Usage

```js
import sessionStore from 'session-store';

```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

	yarn add session-store (--dev)

or npm

	npm install session-store (--save-dev)


### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

```js
import sessionStore from 'session-store';

```

➖ **property** ( type ) ` ✏️ default `
<br/> 📝 description
<br/> ❗️ warning
<br/> ℹ️ info
<br/> 💡 example

### methods

#### #name

```js
sessionStore

```

### Examples

See [`example`](example/script.js) folder or the [runkit](https://runkit.com/jolzee/session-store) example.

### Builds

If you don't use a package manager, you can [access `session-store` via unpkg (CDN)](https://unpkg.com/session-store/), download the source, or point your package manager to the url.

`session-store` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
  -9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `session-store` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist/umd` folder](https://unpkg.com/session-store/dist/umd/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/session-store) on your page. The UMD builds make `session-store` available as a `window.sessionStore` global variable.

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-jolzee-node-module](https://github.com/jolzee/generator-jolzee-node-module).
