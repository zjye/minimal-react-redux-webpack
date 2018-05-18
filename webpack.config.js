const HtmlWebPackPlugin = require("html-webpack-plugin");
const { rules, loaders, plugins, stats } = require('webpack-atoms');
const browsers = ['last 2 versions', 'ie >= 10', 'not android <= 4.4.3'];

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      
      rules.less({ browsers }),
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
