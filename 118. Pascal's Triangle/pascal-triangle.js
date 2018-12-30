/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    result[i] = [];
    for (let j = 0; j <= i; j++) {
      //             first rows should be 1
      if (j === 0) {
        result[i][j] = 1;
      }
      //             along diaginal it should be 1
      else if (i === j) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }
  return result;
};
