const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
   // mode
   mode: "production",
   // enty 
   entry: {
      main: path.resolve(__dirname, "./src/js/main.js"),
      about: path.resolve(__dirname, "./src/js/about.js")
   },
   // about 
   output: {
      path: path.resolve(__dirname, "public"),
      filename: "[name][contenthash].js",
      clean: true
   },
   // Plugins 
   plugins: [
      new HtmlWebpackPlugin({
         title: "Countries || Home",
         template: "./src/indexTemp.html",
         filename: "index.html",
         chunks: 'main'
      }),
      new HtmlWebpackPlugin({
         title: "Countries || About",
         template: "./src/pages/aboutTemp.html",
         filename: "about.html",
         chunks: "about"
      }),
      new MiniCssExtractPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],

         }


      ]
   },
   devServer: {
      static: {
         directory: path.resolve(__dirname, "public")
      },
      port: 3000,
      hot: true,
      open: true,
      compress: true,
      historyApiFallback: true
   }


}