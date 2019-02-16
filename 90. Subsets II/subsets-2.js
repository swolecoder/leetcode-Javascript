/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = [];
  result.push([]);

  var map = {};

  nums.sort();

  const set = new Set();

  nums.forEach(z => {
    let i = 0;
    let length = result.length;

    while (i < length) {
      let temp = result[i].slice(0);
      temp.push(z);

      var str = temp.toString().replace(/\,/g, '');

      if (!map[str]) {
        map[str] = true;
        result.push(temp);
      }

      i++;
    }
  });

  return result;
};
