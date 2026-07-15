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
     * @return {TreeNode}
     */
    invertTree(root) {
        // Stack for DFS
        if (root === null)  return null;
        let stack = [root];

        while (stack.length > 0){
            const node = stack.pop();
            [node.left, node.right] = [node.right, node.left];
            if (node.left !== null) stack.push(node.left);
            if (node.right !== null)    stack.push(node.right);
        }

        return root;
    }
}
