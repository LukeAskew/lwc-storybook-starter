import glob from "glob";
import lwc from "@lwc/rollup-plugin";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const isDev = JSON.stringify("development") !== "production";

const baseBabelConfig = {
  babelrc: false,
  babelHelpers: "bundled",
  extensions: [".ts", ".js"],
};

const plugins = [
  replace({
    preventAssignment: true,
    "process.env.NODE_ENV": JSON.stringify("development"),
  }),
  babel({
    ...baseBabelConfig,
    plugins: [
      ["@babel/plugin-syntax-import-meta"],
      ["@babel/plugin-transform-typescript"],
      ["@babel/plugin-syntax-decorators", { decoratorsBeforeExport: true }],
    ],
  }),
  resolve(),
  commonjs(),
  lwc({
    rootDir: "src",
    include: /\.(ts|js|css|html)(\?.+)*$/,
    modules: [
      {
        dir: "modules",
      },
    ],
  }),
  babel({
    ...baseBabelConfig,
    presets: ["@babel/preset-env"],
  }),
];

if (!isDev) {
  plugins.push(
    terser({
      ecma: 2018,
    })
  );
}

export default {
  input: glob.sync("src/modules/*.ts"),

  output: {
    dir: "dist/modules",
    chunkFileNames: isDev ? "[name].chunk.js" : "[name]-[hash].chunk.js",
    format: "esm",
    sourcemap: true,
  },

  plugins,
};
