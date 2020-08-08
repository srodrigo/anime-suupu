import { merge } from "webpack-merge";
import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const commonConfig: Configuration = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
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
};

const productionConfig: Configuration = {
  mode: "production",
  devtool: "source-map",
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "index.html"),
        },
      ],
    }),
  ],
};

const developmentConfig: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
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
