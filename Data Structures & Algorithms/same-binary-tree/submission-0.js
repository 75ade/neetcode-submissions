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
        if ((p === null && q !== null) || (p !== null && q === null))   return false;
        if (p === null && q === null)   return true;

        let q1 = [p];
        let q2 = [q];

        while (q1.length > 0 && q2.length > 0){
            const node1 = q1.shift();
            const node2 = q2.shift();

            if (node1.val !== node2.val)    return false;

            if (node1.left && node2.left){
                q1.push(node1.left);
                q2.push(node2.left);
            }
            else if (node1.left === null && node2.left === null);
            else    return false;

            if (node1.right && node2.right){
                q1.push(node1.right);
                q2.push(node2.right);
            }
            else if (node1.right === null && node2.right === null);
            else    return false;
        }

        return true;
    }
}
