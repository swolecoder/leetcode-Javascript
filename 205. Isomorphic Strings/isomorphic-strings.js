/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  return helpMap(s, t) && helpMap(t, s);
};
const helpMap = function(s, t) {
  let mapS = new Map(),
    mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    let sChar = s.charAt(i),
      tChar = t.charAt(i);
    if (!mapS.has(sChar)) {
      mapS.set(sChar, tChar);
    } else {
      if (mapS.get(sChar) !== tChar) {
        return false;
      }
    }
  }
  return true;
};

//     ab and aa test
