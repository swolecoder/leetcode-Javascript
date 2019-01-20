/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let set = new Set();
  let data = [];
  for (let item in nums) {
    if (set.has(nums[item])) {
      data.push(nums[item]);
    } else {
      set.add(nums[item]);
    }
  }
  return data;
};
