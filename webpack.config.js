const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require("sass-loader");
let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  devtool: false,
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "./assets/js/[fullhash].[name].js",
    assetModuleFilename: "./assets/images / [hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: "./dist",
    },
    hot: true,
  },
};
