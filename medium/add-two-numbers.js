/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @link https://leetcode.com/problems/add-two-numbers/
 */
var addTwoNumbers = function (l1, l2) {
  var remaining = 0;
  var result = null;
  var node = null;

  while (l1 || l2) {
    var sum = (l1?.val ?? 0) + (l2?.val ?? 0) + remaining;
    var newNode = new ListNode(sum % 10);

    node ? (node = node.next = newNode) : (result = node = newNode);
    (remaining = (sum - newNode.val) / 10), (l1 = l1?.next), (l2 = l2?.next);
  }

  return remaining ? (node.next = new ListNode(remaining)) && result : result;
};
