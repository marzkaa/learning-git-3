const assert = require("assert");
const stylePoints = require("./calculateStylePoints");

describe('Style Points', () => {

  it('should return a number when notes are the same.', () => {
    const actual = stylePoints([20, 20, 20, 20, 20]);

    const expected = 60;

    assert.equal(actual, expected);
  });

  it('should return a number when two of notes are the same.', () => {
    const actual = stylePoints([17, 17.5, 18, 16.5, 17]);

    const expected = 51.5;

    assert.equal(actual, expected);
  });

  it('should return a number when notes are different.', () => {
    const actual = stylePoints([18, 17.5, 16, 16.5, 17]);

    const expected = 51;

    assert.equal(actual, expected);
  });

  it('should return a number when two of notes are the same.', () => {
    const actual = stylePoints([9, 9, 8, 8, 8.5]);

    const expected = 25.5;

    assert.equal(actual, expected);
  });
});