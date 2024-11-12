/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
  for (var i = 0, j, k = {}; i < nums.length; j = k[target - nums[++i]]) {
    if (j !== undefined) {
      return [i, j];
    }

    k[nums[i]] = i;
  }

  return [];
};
