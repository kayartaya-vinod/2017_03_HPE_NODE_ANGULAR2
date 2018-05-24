var assert = require("assert");
var calci = require("../lib/Calculator");

// test suite
describe("Calculator tests", function(){

    // test case
    it("should add two numbers", function(){
        var expected = 100;
        var actual = calci.add(20, 80);
        assert.equal(actual, expected);
    });

});