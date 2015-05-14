var tsc = require('typescript-compiler');

var TypescriptCompiler = function (config) {
  // TODO: support for compiler options
};

TypescriptCompiler.prototype.brunchPlugin = true;
TypescriptCompiler.prototype.type = 'javascript';

TypescriptCompiler.prototype.compile = function (data, path, callback) {
  try {
    var compiled = tsc.compileString(data);
    callback(null, {data: compiled});
  } catch (error) {
    callback(error);
  }
};

module.exports = TypescriptCompiler;
