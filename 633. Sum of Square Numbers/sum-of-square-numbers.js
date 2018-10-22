/**
 * @param {number} c
 * @return {boolean}
 */

// Now note that one integer in the decomposition determines the other. If we have a test candidate a for c=a2+b2 then it suffices to check if  sqrt (c-a^2)  is an integer. Also we can assume that a≤b, which restricts the range of a:

//Help:https://codereview.stackexchange.com/questions/182062/sum-of-square-numbers

var judgeSquareSum = function(c) {
  // Handle 0, 1, and 2 directly:
  if (c <= 2) {
    return true;
  }
  // Remove even factors:
  while (c % 2 === 0) {
    c /= 2;
  }
  let aMax = Math.sqrt(c / 2);
  for (let a = 0; a < aMax; a++) {
    let b = Math.sqrt(c - a * a);

    if (b === Math.round(b)) {
      return true;
    }
  }
  return false;
};
