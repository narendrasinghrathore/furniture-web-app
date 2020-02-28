const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: { app: "./src/index.js", product: "./src/services/products.js" },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(), // clean dist folder on new build
    new htmlwebpackplugin({
      title: "Furniture Application",
      template: "./index.html"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
};
