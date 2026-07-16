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
        let q1 = [p];
        let q2 = [q];

        while (q1.length > 0 && q2.length > 0){
            const size = q1.length
            for (let i = 0; i < size; i++){
                const nodeP = q1.shift();
                const nodeQ = q2.shift();

                if (nodeP === null && nodeQ === null)   continue;
                if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val)    return false;

                q1.push(nodeP.left);
                q2.push(nodeQ.left);

                q1.push(nodeP.right);
                q2.push(nodeQ.right);
            }
        }

        return true;
    }
}
