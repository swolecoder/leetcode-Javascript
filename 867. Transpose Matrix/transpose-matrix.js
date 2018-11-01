/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let rows = A.length;
  let columns = A[0].length;

  let result = [];
  let temp;

  for (let c = 0; c < columns; c++) {
    temp = [];
    for (let r = 0; r < rows; r++) {
      temp.push(A[r][c]);
    }
    result.push(temp);
  }
  return result;
};
