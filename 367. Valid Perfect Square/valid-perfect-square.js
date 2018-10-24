var isPerfectSquare = function(num) {
  debugger;
  if (num === 1 || num === 4) return true;
  if (num < 4) return false;

  let start = 2;
  let end = num / 2;
  // Binary search
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    let squared = middle * middle;

    if (squared == num) {
      return true;
    }
    if (squared > num) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return false;
};
