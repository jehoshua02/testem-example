var path = require('path');
var glob = require('glob');
var json = require('jsonfile').readFileSync;

var src = glob.sync('./tests/unit/**/*.js');

var entry = src.reduce(function (context, item) {
  var file = path.resolve(item);
  var name = file.replace(__dirname + '/', '');
  context[name] = file;
  return context;
}, {});

module.exports = {
  entry: entry,
  output: {
    path: __dirname + '/bundles',
    filename: '[name]'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?experimental' }
    ]
  }
}
