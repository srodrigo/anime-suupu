import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules|packages/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()],
};
