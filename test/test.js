var assert = require("assert");
var Plugin = require("../index");

describe("Typescript compilation", function () {
  describe("basic compilation", function () {
    it("should be able to compile strings", function () {
      new Plugin().compile("module Navy { export class Ship { isSunk: boolean; } }", null, function (error) {
        assert.equal(error, null);
      });
    });

    it("should halt on errors", function () {
      new Plugin().compile("classs A {}", null, function (error) {
        assert.notEqual(error, null);
      });
    });
  })
});
