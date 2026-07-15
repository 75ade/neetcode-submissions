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
        // Queue for BFS
        if (root === null)  return null;
        let queue = [root];
        
        while (queue.length > 0){
            const node = queue.shift();
            [node.left, node.right] = [node.right, node.left];
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null)    queue.push(node.right);
        }
        
        return root;
    }
}
