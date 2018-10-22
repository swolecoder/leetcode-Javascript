/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let dummy = new ListNode(0);
  let carry = 0;
  let sum = 0;
  let return_list = dummy;

  while (l1 || l2 || carry) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    dummy.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    dummy = dummy.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return return_list.next;
};
