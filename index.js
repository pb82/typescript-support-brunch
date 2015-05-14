var tsc = require('typescript-compiler');

var TypescriptCompiler = function (config) {
  // TODO: support for compiler options
};

TypescriptCompiler.prototype.brunchPlugin = true;
TypescriptCompiler.prototype.type = 'javascript';
TypescriptCompiler.prototype.extension = "ts";

TypescriptCompiler.prototype.compile = function (data, path, callback) {
  var compiled = tsc.compileString(data, null, null, function (error) {
    callback(error.formattedMessage);
  });

  if (compiled) {
    return callback(null, {data: compiled});
  }
};

module.exports = TypescriptCompiler;
