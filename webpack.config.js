const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output:{
    path: path.resolve(__dirname,'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve:{
    modules:['node_modules'],
    extensions:['.js','.jsx']
  },
  module:{
    rules: [
            {
              loader:'babel-loader',
              test: /\.jsx?$/,
              include: path.resolve(__dirname, 'src')
            },
            {
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
              }),
              test: /\.css$/
            },
            {
              test: [
                /\.(png|jpe?g|gif|svg)$/i,
                /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
              ],
              include: path.resolve(__dirname, 'node_modules'),
              loader: {
                loader: 'file-loader',
                options: {
                  context: 'node_modules/',
                  name: 'lib/[path][name].[ext]',
                },
              },
            }
    ]
  },
  devServer:{
    port:3000,
    contentBase:'./src',
    inline:true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('assets/bundle.css')
  ]
}
