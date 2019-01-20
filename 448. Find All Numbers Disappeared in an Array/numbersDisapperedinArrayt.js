var findDisappearedNumbers = function(nums) {
  var res = [];
  for (var i = 1; i < nums.length + 1; i++) {
    if (nums.indexOf(i) === -1) res.push(i);
  }
  return res;
};
