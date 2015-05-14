var assert = require("assert");
var Plugin = require("../index");

describe("Typescript compilation", function () {
  describe("basic compilation", function () {
    it("should be able to compile strings", function () {
      assert.doesNotThrow(function () {
        new Plugin().compile("module Navy { export class Ship { isSunk: boolean; } }", null, function () {
          // dummy callback
        });
      });
    });

    it("should halt on errors", function () {
      assert.throws(function () {
        new Plugin.compile("nonsense", null, function () {
          // dummy callback
        });
      });
    });
  })
});
