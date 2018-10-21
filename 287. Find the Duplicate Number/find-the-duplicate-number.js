/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  if (nums.length < 1) return null;

  if (nums.length === 1) return null;

  let dup_set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (dup_set.has(nums[i])) {
      return nums[i];
    } else {
      dup_set.add(nums[i]);
    }
  }
};
