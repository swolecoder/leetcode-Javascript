/*
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  const m = matrix.length; //rows
  const n = matrix[0].length;

  // let start search at left right
  let i = 0;
  let j = n - 1;
  while (i < m && j < n) {
    if (matrix[i][j] === target) {
      return true;
    } else if (target < matrix[i][j]) {
      j = j - 1;
    } else {
      i = i + 1;
    }
  }
  return false;
};
