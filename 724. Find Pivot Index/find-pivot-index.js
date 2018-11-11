/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (!nums) return [];
  let sum = nums.length > 0 ? nums.reduce((a, b) => a + b) : 0;
  let left = 0,
    right = 0;
  //     loop through array

  for (let i = 0; i < nums.length; i++) {
    right = sum - left - nums[i];

    if (right === left) return i;

    left = left + nums[i];
  }

  return -1;
};
