const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const pkg = require("./package.json");
const dependencies = pkg.dependencies;

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "http://localhost:8082/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8082,
  },
  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "vueSidebar",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Sidebar": "./src/index",
      },
      shared: dependencies,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
