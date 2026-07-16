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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let stack = [[p, q]];

        while (stack.length > 0){
            let [nodeP, nodeQ] = stack.pop();

            if (nodeP === null && nodeQ === null)   continue;
            if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val)    return false;

            stack.push([nodeP.left, nodeQ.left]);
            stack.push([nodeP.right, nodeQ.right]);
        }

        return true;
    }
}
