/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // set a slow and fast pointer
  // let the pointers run through the linked list until fast or fast.next is null
  // at that point, if fast is on a non-null node, it means the list is odd
  // we move slow to its next node because we only need to reverse the second half of the list to that point
  // reverse the part from slow to the end, create prev to document the previously reversed node
  // when it finishes, prev should be at the head of the reversed part
  // set fast back to the head of the entire list
  // move fast and prev at the same speed from two ends, until prev runs out
  // if the nodes they are both on do not equal, return false
  // return true

  var slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    slow = slow.next;
  }

  var prev = null;
  while (slow) {
    var next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  fast = head;
  while (prev) {
    if (prev.val !== fast.val) {
      return false;
    }
    prev = prev.next;
    fast = fast.next;
  }
  return true;
};
