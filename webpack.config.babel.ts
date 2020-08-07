import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin(), new BundleAnalyzerPlugin()],
};
