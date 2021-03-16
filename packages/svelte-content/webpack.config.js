const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebPackPlugin = require("html-webpack-plugin");

const pkg = require("./package.json");
const dependencies = pkg.dependencies;

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "http://localhost:8081/",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "svelteContent",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Content": "./src/index",
      },
      shared: {
        ...dependencies,
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
