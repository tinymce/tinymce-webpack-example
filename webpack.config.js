const path = require('path');

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [ ".js", ".jsx" ],
  },
  entry: './src/index.js',
  target: 'web',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
}

module.exports = [ config ];