/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @link https://leetcode.com/problems/median-of-two-sorted-arrays/
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var arr = [...nums1, ...nums2].toSorted((a, b) => a - b);

  if (1 === arr.length % 2) {
    return arr[Math.floor(arr.length / 2)];
  }

  return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2 || 0;
};
