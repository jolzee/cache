import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify-es";
import filesize from "rollup-plugin-filesize";
import commonjs from "rollup-plugin-commonjs";
import json from "@rollup/plugin-json";

const name = `cache`;

const plugins = [
  babel(),
  json(),
  nodeResolve({
    // the fields to scan in a package.json to determine the entry point
    // if this list contains "browser", overrides specified in "pkg.browser"
    // will be used
    mainFields: ["module", "main"], // Default: ['module', 'main']

    // not all files you want to resolve are .js files
    extensions: [".mjs", ".js", ".jsx", ".json"], // Default: [ '.mjs', '.js', '.json', '.node' ]

    // If true, inspect resolved files to check that they are
    // ES2015 modules
    modulesOnly: true // Default: false

    // Force resolving for these modules to root's node_modules that helps
    // to prevent bundling the same package multiple times if package is
    // imported from dependencies.
    // dedupe: ["ioredis"] // Default: []
  }),
  commonjs({
    include: `node_modules/**`
  }),
  filesize()
];

const isProd = process.env.NODE_ENV === `production`;
if (isProd) plugins.push(uglify());

export default {
  plugins,
  input: `src/index.js`,
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    name: name
  }
};
