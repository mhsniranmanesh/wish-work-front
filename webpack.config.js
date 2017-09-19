const path = require('path');

module.exports = {
  entry: './app/src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer:{
    inline: true,
    contentBase: './build',
    port: 9000
  },
  module:{
    rules: [
      {
        test:  /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }
    ]
  },
};
