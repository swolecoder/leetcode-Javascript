/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let maxIndex = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  //     loop throigh the entre array
  for (let i = 0; i < nums.length; i++) {
    if (maxIndex != i && 2 * nums[i] > nums[maxIndex]) {
      return -1;
    }
  }
  return maxIndex;
};
