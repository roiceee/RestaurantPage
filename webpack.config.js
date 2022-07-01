const path = require('path');

module.exports = {
  entry: {
    first: './src/index.js',
    second: './src/menu.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
        type: 'asset/resource',
      },
    ]
  }
};