/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let first = head;
  let second = head;

  let counter = 0;
  //moving n nodes forward
  while (counter < n) {
    second = second.next;
    counter++;
  }
  //remove head case
  if (!second) {
    head = head.next;
    return head;
  }

  while (second.next) {
    first = first.next;
    second = second.next;
  }

  first.next = first.next.next;
  return head;
};
