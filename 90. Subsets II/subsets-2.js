/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = [];
  result.push([]);

  var map = {};

  nums.sort();

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


/*

[]

Number:[1,2,3]

[[],[1]]

[[],[1],[2],[1,2]]






*/