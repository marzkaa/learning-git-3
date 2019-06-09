const assert = require("assert");
const totalPoints = require("./calculateTotalPoints");

describe('Total Points', () => {

  describe('Hill normal', () => {

  it('should return a number (when additional points are positive).', () => {
    const actual = totalPoints(90, 'normal', 98, [17.5, 17, 18, 17.5, 17], 2.4, 9);

    const expected = 107.4;

    assert.equal(actual, expected);
  });

  it('should return a number (when additional points are negative).', () => {
    const actual = totalPoints(105, 'normal', 98, [19, 19, 19, 19.5, 20], -16.5, -2);

    const expected = 113;

    assert.equal(actual, expected);
  });
  });

  describe('Hill big', () => {

    it('should return a number (when additional points are positive).', () => {
      const actual = totalPoints(105.5, 'big', 120, [17, 18, 18, 17.5, 17.5], 12.8, 2);

      const expected = 101.7;

      assert.equal(actual, expected);
    });

    it('should return a number (when additional points are negative).', () => {
      const actual = totalPoints(136, 'big', 120, [20, 19.5, 19.5, 20, 20], -14, -6);

      const expected = 128.3;

      assert.equal(actual, expected);
    });
  });

  describe('Hill mammoth', () => {

    it('should return a number (when additional points are positive).', () => {
      const actual = totalPoints(182, 'mammoth', 200, [17, 17.5, 17, 17.5, 17], 26.1, 6);

      const expected = 182;

      assert.equal(actual, expected);
    });

    it('should return a number (when additional points are negative).', () => {
      const actual = totalPoints(235.5, 'mammoth', 200, [19, 18.5, 18.5, 19, 18.5], -8, -1);

      const expected = 209.6;

      assert.equal(actual, expected);
    });
  });
});