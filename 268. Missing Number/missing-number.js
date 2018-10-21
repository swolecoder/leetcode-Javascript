/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if (!nums) return null;
  let length = nums.length;
  //sum of 0 ......n = n*(n+1)/2
  let sum = ((length + 1) * length) / 2;

  for (let i = 0; i < length; i++) {
    sum -= nums[i];
  }
  return sum;
};
