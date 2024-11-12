/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  var max = 0;
  var ptr = 0;

  for (var i = -1, val, mem = {}; i < s.length; val = mem[s[++i]]) {
    if (undefined !== val) {
      max = Math.max(max, i - ptr);
      ptr = Math.max(ptr, 1 + val);
    }

    mem[s[i]] = i;
  }

  return Math.max(max, s.length - ptr);
};
