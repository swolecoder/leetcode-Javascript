/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  // We keep a dictionary/set of the values that we have visited, and if we hit one of these keys again then we return that node.

  let slow = head;
  let dup_set = new Set();

  while (slow) {
    if (dup_set.has(slow)) {
      return slow;
    } else {
      dup_set.add(slow);
      slow = slow.next;
    }
  }
  return null;
};
