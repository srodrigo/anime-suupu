import { merge } from "webpack-merge";
import path from "path";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const commonPlugins = [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()];

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", "jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: commonPlugins,
};

const productionConfig: Configuration = {
  mode: "production",
};

const developmentConfig: Configuration = {
  mode: "development",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: commonPlugins.concat(new BundleAnalyzerPlugin()),
};

module.exports = (environment: string) => {
  switch (environment) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
