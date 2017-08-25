var path = require('path');

module.exports = {
  entry: {
    seedgen: './src/seedgen.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [/*'es2015', */"stage-0"]
        }
      }
    ],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: '/dist',
    filename: '[name].min.js',
    chunkFilename: '[id].bundle.js'
  }
};

