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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let current = root;

        while (current !== null){
            if (current.val > Math.max(p.val, q.val))   current = current.left;
            else if (current.val < Math.min(p.val, q.val))  current = current.right;
            else    return current;
        }

        return null;
    }
}
