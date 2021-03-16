const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const pkg = require("./package.json");
const dependencies = pkg.dependencies;

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "http://localhost:8080/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactHeader",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/index",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new CleanWebpackPlugin(),
  ],
};
