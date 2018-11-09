/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  let l = 0;
  let k = 0;
  // returned array
  let ans = [];
  let last_column = matrix[0].length - 1;
  let last_row = matrix.length - 1;
  while (k <= last_row && l <= last_column) {
    //         print first row
    for (let i = l; i <= last_column; i++) {
      ans.push(matrix[k][i]);
    }
    k++;

    //         print last column
    for (let i = k; i <= last_row; i++) {
      ans.push(matrix[i][last_column]);
    }

    last_column--;

    //
    if (k <= last_row) {
      //         print last row;

      for (let i = last_column; i >= l; i--) {
        ans.push(matrix[last_row][i]);
      }

      last_row--;
    }

    if (l <= last_column) {
      //         print first column
      for (let i = last_row; i >= k; i--) {
        ans.push(matrix[i][l]);
      }

      l++;
    }
  }
  return ans;
};

let s = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(s));
