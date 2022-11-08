const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        example: './src/example.js',
      },
      devtool: 'inline-source-map',
      devServer: {
        static: './dist',
        hot: true,
    devMiddleware: {
      publicPath: '/dist/',
      writeToDisk: true,
   },    
      },
      plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/template.html',
        }),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
      }
    ],
  },
};

