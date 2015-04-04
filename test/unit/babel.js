describe("babel-loader", function () {
  it("should preprocess destructuring statements", function () {
    var {one, two, three, ...other} = {one: 1, two: 2, three: 3, four: 4, five: 5};
    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
    expect(other).toEqual({four: 4, five: 5});
  });
});
