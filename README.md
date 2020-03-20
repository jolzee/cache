# cache

> Key Value data store for sessions using in memory or Redis

### Usage

```js
import Cache from "@jolzee/cache";

// for in-memory cache
const cache = new Cache({
	defaultTimeToLiveMin: 20
});

// for Redis backed cache
const cache = new Cache({
	redisHost: "redis-host"
	redisPort: 6379
	redisPassword: "your-password"
	defaultTimeToLiveMin: 20
});

cache.set("12345", "😁");
cache.get("12345").then(val => {
	console.log(val); // 😁
});

cache.del("12345");
cache.get("12345").then(val => {
	console.log(val); // null
});

cache.set("22222", "🚀", 5);

// wait more than 5 min
cache.get("22222").then(val => {
	console.log(val); // null
});
```

### Installation

Install via [yarn](https://github.com/yarnpkg/yarn)

    yarn add @jolzee/cache

or npm

    npm install @jolzee/cache

### configuration

You can pass in extra options as a configuration object (➕ required, ➖ optional, ✏️ default).

Redis - `all required`

```js
{
  redisHost: "redis-host";
  redisPort: 6379;
  redisPassword: "your-password";
  defaultTimeToLiveMin: 20;
}
```

In Memory - `all required`

```js
{
  defaultTimeToLiveMin: 20;
}
```

### Builds

`cache` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/0
-9/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

### License

The code is available under the [MIT](LICENSE) license.

### Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.

### Misc

This module was created using [generator-jolzee-node-module](https://github.com/jolzee/generator-jolzee-node-module).
