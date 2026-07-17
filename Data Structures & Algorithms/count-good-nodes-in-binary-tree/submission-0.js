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
        let count = 0;
        let queue = [[root, Number.NEGATIVE_INFINITY]];

        while (queue.length > 0){
            let [node, maxVal] = queue.shift();

            if (node.val >= maxVal){
                count++;
                maxVal = node.val;
            }

            if (node.left !== null) queue.push([node.left, maxVal]);
            if (node.right !== null)    queue.push([node.right, maxVal]);
        }

        return count;
    }
}
