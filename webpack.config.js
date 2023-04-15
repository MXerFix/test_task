const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == "development";
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  mode: NODE_ENV ? NODE_ENV : "development",

  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    assetModuleFilename: 'images/[name][hash][ext][query]'
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|svg|png)$/,
        type: 'asset/resource'
      }
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve(__dirname, "index.html") }),
  ],

  devServer: {
    port: 3600,
    open: true,
    hot: IS_DEV,
  },

  devtool: false,
};
