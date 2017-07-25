const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: ['./src/index.js'],
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  resolve:{
    modules:['node_modules']
  },
  module:{
    rules: [
            {
              loader:'babel-loader',
              test: /\.jsx?$/,
              include: path.resolve(__dirname, 'src')
            }
    ]
  },
  devServer:{
    port:3000,
    contentBase:'./src',
    inline:true
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
}
