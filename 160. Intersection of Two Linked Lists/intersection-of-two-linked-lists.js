/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// # the idea is if you switch head, the possible difference between length would be countered.
// # On the second traversal, they either hit or miss.
// # if they meet, pa or pb would be the node we are looking for,
// # if they didn't meet, they will hit the end at the same iteration, pa == pb == None, return either one of them is the same,None

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  var p1 = headA;
  var p2 = headB;
  while (p1 && p2 && p1 !== p2) {
    //  if either pointer hits the end, switch head and continue the second traversal,
    //  if not hit the end, just move on to next
    p1 = p1.next;
    p2 = p2.next;

    if (p1 == p2) return p1; // only 2 ways to get out of the loop, they meet or the both hit the end=None

    if (!p1) p1 = headB;
    if (!p2) p2 = headA;
  }
  return p1;
};
