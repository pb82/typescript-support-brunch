var tsc = require('typescript-compiler');

var TypescriptCompiler = function (config) {
  // TODO: support for compiler options
  if (config && config.plugins) {
    this.config = config.plugins.Typescript;
  } else {
    this.config = {};
  }
};

TypescriptCompiler.prototype.brunchPlugin = true;
TypescriptCompiler.prototype.type = 'javascript';
TypescriptCompiler.prototype.extension = "ts";

TypescriptCompiler.prototype.compile = function (data, path, callback) {
  var compiled = tsc.compileString(data, this.config.tscArgs, null, function (error) {
    callback(error.formattedMessage);
  });

  if (compiled) {
    return callback(null, {data: compiled});
  }
};

module.exports = TypescriptCompiler;
