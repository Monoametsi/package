import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import json from "@rollup/plugin-json";
import cleaner from 'rollup-plugin-cleaner';
import autoprefixer from "autoprefixer";
import nodePolyfills from 'rollup-plugin-node-polyfills';
import babel from "@rollup/plugin-babel";
const packageJsonPath = "./export-package.json";
const { main, module } = require(packageJsonPath);

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
      onwarn: function(warning) {
        if ( warning.code === 'THIS_IS_UNDEFINED' ) { 
          return;
        }
        console.warn( warning.message );
    },
    inlineDynamicImports: true,
    input: "src/index.ts",
    output: [
      {
        file: main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: module,
        format: "esm",
        sourcemap: true,
      }
    ],
    external: ["@aws-sdk", /@aws-sdk\/.*/],
    plugins: [
      peerDepsExternal(),
      cleaner({
        targets: ['export-dist']
      }),
      json(),
      nodePolyfills(),
      commonjs({ transformMixedEsModules: true }),
      resolve({ 
        browser : false, 
        preferBuiltins: false 
      }),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({ 
        plugins: [autoprefixer],
        modules: {
          scopeBehaviour: "global",
        },
        sourceMap: true,
        extract: true
      }),
      image(),
      terser()
    ],
  }
];