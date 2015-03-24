describe('hello', function () {
  var hello = require('../../src/hello');

  it('returns "hello world"', function () {
    expect(hello()).toBe('hello world');
  });

  it('should say my name, say my name', function () {
    expect(hello('Joshua')).toBe('hello Joshua');
  });
});
