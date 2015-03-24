describe('hello', function () {
  it('returns "hello world"', function () {
    expect(hello()).toBe('hello world');
  });
});

describe('hello(myName)', function () {
  it('should say my name, say my name', function () {
    expect(hello('Joshua')).toBe('hello Joshua');
  });
});
