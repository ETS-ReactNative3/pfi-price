const path = require('path');

module.exports = {
  entry:  {
      productionProcess : path.resolve(__dirname,  "src/productionProcess.js")

  },
  target: 'web',
  output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: "[name].js",
      library: 'ui'
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3000
  }
};
