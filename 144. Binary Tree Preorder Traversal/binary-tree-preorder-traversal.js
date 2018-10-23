/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let result = [];
  if (!root) return result;

  function traverse(root) {
    result.push(root.val);
    if (root.left) traverse(root.left);
    if (root.right) traverse(root.right);
  }

  traverse(root);
  return result;
};
