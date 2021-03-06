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

const ciConfig: Configuration = {
  mode: "development",
  plugins: [new HtmlWebpackPlugin()],
};

type Config = {
  WEBPACK_BUNDLE?: boolean;
  WEBPACK_BUILD?: boolean;
  WEBPACK_SERVE?: boolean;
  production?: boolean;
  dev?: boolean;
  ci?: boolean;
};

module.exports = (config: Config) => {
  if (config.production) {
    return merge(commonConfig, productionConfig);
  }

  if (config.ci) {
    return merge(commonConfig, ciConfig);
  }

  if (config.dev) {
    return merge(commonConfig, developmentConfig);
  }

  throw new Error("No matching configuration was found!");
};
