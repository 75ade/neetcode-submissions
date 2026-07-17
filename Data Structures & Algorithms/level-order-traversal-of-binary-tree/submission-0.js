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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null)  return [];

        let res = [];
        let queue = [root];

        while (queue.length > 0){
            const size = queue.length;
            let temp = [];
            for (let i = 0; i < size; i++){
                const node = queue.shift();

                if (node !== null){
                    temp.push(node.val);
                    if (node.left !== null) queue.push(node.left);
                    if (node.right !== null)    queue.push(node.right);
                }
            }
            res.push(temp);
        }

        return res;
    }
}
