/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  str = str.split(' ');

  if (str.length != pattern.length) {
    return false;
  }

  var hash = {};

  for (var i = 0; i < str.length; i++) {
    if (hash[pattern[i]]) {
      if (hash[pattern[i]] !== str[i]) {
        return false;
      }
    } else {
      if (Object.values(hash).indexOf(str[i]) !== -1) {
        return false;
      } else {
        hash[pattern[i]] = str[i];
      }
    }
  }

  return true;
};
