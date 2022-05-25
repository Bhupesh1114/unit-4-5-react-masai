const { expect, test, describe } = require("@jest/globals");
const sum = require("../sum_arguments");

describe("Sum_arguments should work on multiple arguments", function () {
  test("with positive arguments", function () {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test("with negative arguments", function () {
    expect(sum(-1, -2, -3)).toBe(-6);
  });
    
  test("with negative and positive arguments", function () {
    expect(sum(-1, -2, 3)).toBe(0);
  });
  
    test("with decimal arguments", function () {
        expect(sum(1, 0.5, 2.5, 1.5)).toBe(5.5);
   })
});
