const path = require('path');

module.export = {
  entry: './source/js/main.js',
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'main.bundle.js',
  }
};
