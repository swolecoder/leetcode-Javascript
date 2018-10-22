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

//Hints:
// So the code has three parts.
// 1. Get the length
// 2. Move to the (length-k%length)th node
// 3)Do the rotation

var rotateRight = function(head, k) {
  if (!head) return head;

  let length = len(head);

  k = k % length;

  for (let i = 0; i < k; i++) {
    head = moveRight1Step(head);
  }
  return head;
};

function moveRight1Step(head) {
  let pre = head;
  let current = head;
  while (current && current.next !== null) {
    pre = current;
    current = current.next;
  }

  current.next = head;
  head = current;
  pre.next = null;

  return head;
}

function len(head) {
  if (!head) return 0;
  let leng = 1;
  let current = head;
  while (current.next) {
    leng++;
    current = current.next;
  }
  return leng;
}
