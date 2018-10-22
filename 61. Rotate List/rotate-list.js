/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  //     Hints:
  // So the code has three parts.
  // 1. Get the length
  // 2. Move to the (length-k%length)th node
  // 3)Do the rotation

  let fast = head;
  let slow = head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let length = 0;

  //Get the length
  for (let i = 0; fast.next !== null; i++) {
    length++;
    fast = fast.next;
  }

  // Move slow length-k%length steps
  for (let j = 0; j < length - (k % length); j++) {
    slow = slow.next;
  }

  //do rotation

  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;

  return dummy.next;
};
