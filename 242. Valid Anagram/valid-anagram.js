/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = {};
  if (s.length !== t.length) return false;

  if (!s || !t) return false;

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!map[t[j]]) {
      map[t[j]] = 1;
    } else {
      map[t[j]]--;
    }
  }

  for (let ch in map) {
    if (map[ch] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('abd', 'bda'));
