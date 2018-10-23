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
var inorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  function traverse(root) {
    if (root.left) traverse(root.left);
    result.push(root.val);
    if (root.right) traverse(root.right);
  }
  traverse(root);
  return result;
};
