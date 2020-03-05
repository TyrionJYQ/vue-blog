const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const alias = require('./src/helper/alias')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
 
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    },
    {
      test: /\.(vue|js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre',
      options: {
        emitWarning: true,
      }
    },
    {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.styl(us)?$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader',
      ],
    },
    {
      test: /\.vue$/,
      use: ['vue-loader']
    }]
  },
  resolve: {
    alias,
    extensions: ['.js', '.vue']
  },
  devtool:'source-map',
  devServer: {
    contentBase: './dist',
    port: 1234,
    open: false,
    proxy: {
      '/tyrionblog': 'http://localhost:9999'
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ]
}