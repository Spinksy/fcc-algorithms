var expect = require("chai").expect;
var sut = require("../01_FindTheSymmetricDifference");

describe("Find the Symmetric Difference", function () {

  it("sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]", function () {
    expect(sut.sym([1, 2, 3], [5, 2, 1, 4])).to.eql([3, 4, 5]);
  });

  it("sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements", function () {
    var result = sut.sym([1, 2, 3], [5, 2, 1, 4]);
    expect(result.length).to.equal(3);
  });

  it("sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]", function () {
    expect(sut.sym([1, 2, 3, 3], [5, 2, 1, 4])).to.eql([3, 4, 5]);
  });

  it("sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements", function () {
    expect(sut.sym([1, 2, 3, 3], [5, 2, 1, 4]).length).to.equal(3);
  });

  it("sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5]", function () {
    expect(sut.sym([1, 2, 3], [5, 2, 1, 4, 5])).to.eql([3, 4, 5]);
  });

  it("sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements", function () {
    expect(sut.sym([1, 2, 3], [5, 2, 1, 4, 5]).length).to.equal(3);
  });

  it("sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]", function () {
    expect(sut.sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.eql([1, 4, 5]);
  });

  it("sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.", function () {
    expect(sut.sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length).to.equal(3);
  });

  it("sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].", function () {
    expect(sut.sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.eql([1,4,5]);
  });

  it("sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.", function () {
    expect(sut.sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length).to.equal(3);
  });

  it("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].", function () {
    expect(sut.sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.eql([2, 3, 4, 6, 7]);
  });

  it("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.", function () {
    expect(sut.sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length).to.equal(5);
  });

  it("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].", function () {
    expect(sut.sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).to.eql([1, 2, 4, 5, 6, 7, 8, 9]);
  });

  it("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.", function () {
    expect(sut.sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length).to.equal(8);
  });
  
});
