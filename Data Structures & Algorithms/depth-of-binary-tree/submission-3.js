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
    maxDepth(root) {
        if (root === null)  return 0;

        let stack = [[root, 1]];
        let maxDepth = 0;
        
        while (stack.length > 0){
            const item = stack.pop();
            const node = item[0];
            const depth = item[1];
            maxDepth = Math.max(maxDepth, depth);

            if (node.left !== null) stack.push([node.left, depth + 1]);
            if (node.right !== null)    stack.push([node.right, depth + 1]);
        }

        return maxDepth;
    }
}
