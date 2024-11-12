/**
 * @param {string} s
 * @return {string}
 * @link https://leetcode.com/problems/longest-palindromic-substring/
 */
var longestPalindrome = function (s) {
  var a = 0;
  var b = 0;

  for (let i = 0, tmp = s[i]; i < s.length; tmp = s[++i]) {
    for (let j = i + 1; j < s.length; j++) {
      if ((tmp = s[j] + tmp) === s.slice(i, j + 1)) {
        b - a < j - i && ((a = i), (b = j));
      }
    }
  }

  return s.slice(a, b + 1);
};
