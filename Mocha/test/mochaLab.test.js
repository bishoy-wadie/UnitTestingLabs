const { capitalizeText, createArray } = require("../mochaLab");

const assert = require("chai").assert;

//CaptalizeText
describe("test capitalizeText function", () => {
  it("the function takes a string it will return a string", () => {
    assert.typeOf(capitalizeText("test"), "string");
  });
  it("test that the function takes a string and return it after capitalize it", () => {
    assert.equal(capitalizeText("test"), "TEST");
  });
  it("test if the function takes number it will throw type error says parameter should be string", () => {
    assert.throw(() => {
      capitalizeText(12), TypeError, "Parameter should be a string";
    });
  });
});

//CreateArray
describe("test createArray function", () => {
  it("test that the return value of type array", () => {
    assert.typeOf(createArray(3), "array");
  });
  it("test if we pass 2 it will return array of length 2 and test it includes 1", () => {
    const arr = createArray(2);
    assert.typeOf(arr, "array");
    assert.lengthOf(arr, 2);
    assert.include(arr, 1);
  });
  it("test if we pass 3 it will return array of length 3 and test it doesn't include 3", () => {
    const arr = createArray(3);
    assert.typeOf(arr, "array");
    assert.lengthOf(arr, 3);
    assert.notInclude(arr, 3);
  });
});
