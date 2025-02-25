"use strict";
/*
// ------ testing code using Mocha ------

describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    if (
      (`${x} in the power 3 is ${expected}`,
      function () {
        assert.equal(pow(x, 3), expected);
      })
    );
  }
  for (let x = 1; x <= 5; x++) {
    makeTest();
  }
});

// ---------------- testing the dode ---------
function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
alert(pow(3, 4));

// ----------- task --- find debug with mocha ----------
it("Raises x to the power n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// ----------- Solution: after debugging ---------
describe("Raises x to power n", function () {
  it("5 in the power of 1 equals 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  // Mocha will run only this block
  it.only("5 in the power of 2 equals 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});

*/
