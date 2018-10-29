/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [],
    brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };

  for (i = 0; i < s.length; i++) {
    if (s[i] in brackets) {
      stack.push(s[i]);
    } else {
      check = stack.pop();
      if (brackets[check] != s[i]) {
        return false;
      }
    }
  }3

  // Stack should be empty by now.
  if (stack.length != 0) return false;
  return true;
};
