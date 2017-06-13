var webpack = require('webpack')
var path = require('path')

const source_dir = path.resolve(__dirname, 'React')
const build_dir = path.resolve(__dirname, 'build')

const config = {
  entry: source_dir + '/index.js',

  output: {
    path: build_dir,
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        include: source_dir,
        loader: 'babel-loader',
      }
    ]
  }

}

module.exports = config
