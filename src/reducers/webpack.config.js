const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  console.log(env);
  console.log(path.resolve(__dirname, 'dist'));
  return {
    mode: env,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist'
    },
    plugins:[
      new CopyWebpackPlugin([
        {from: 'src/assets/images', to: 'images'}
      ]),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.html$/,
          use:['html-loader']
        }
      ],
    }
  };
};