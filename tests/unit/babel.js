describe('babel-loader', function () {
  it('should preprocess destructuring statements', function () {
    var {one, two, three, ...other} = [1,2,3,4,5];
    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
    expect(other).toBe([4,5]);
  });
});
