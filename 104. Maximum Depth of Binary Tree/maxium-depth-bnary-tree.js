/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let h = 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  if (left > right) {
    h = 1 + left;
  } else {
    h = 1 + right;
  }
  return h;
};
