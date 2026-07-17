/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, Number.NEGATIVE_INFINITY);
    }

    dfs(node, maxVal){
        if (node === null)  return 0;

        let res = node.val >= maxVal ? 1 : 0;
        res += this.dfs(node.left, Math.max(node.val, maxVal));
        res += this.dfs(node.right, Math.max(node.val, maxVal));

        return res;
    }
}
