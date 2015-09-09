var tsc = require('typescript-compiler');

var TypescriptCompiler = function (config) {
  if (config && config.plugins && config.plugins.Typescript) {
    this.config = config.plugins.Typescript;
  } else {
    this.config = {};
  }
};

TypescriptCompiler.prototype.brunchPlugin = true;
TypescriptCompiler.prototype.type = 'javascript';
TypescriptCompiler.prototype.extension = "ts";

TypescriptCompiler.prototype.compile = function (data, path, callback) {
 var errors = [];

  var compiled = tsc.compileString(data, this.config.tscArgs, null, function (error) {
    /**
     * because of brunch inlining source code one by one
     * tsc could not found external module (hope your editor manage this ;)
     */
    if(error.code != 2307) {
       errors.push(error.formattedMessage);
    }
  });

  return callback(errors.length > 0 ? errors : null , compiled ? { data: compiled } : null);
};

module.exports = TypescriptCompiler;
