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
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null)  return true;

        let stack = [root];
        let map = new Map();
        map.set(null, 0);

        while (stack.length > 0){
            let node = stack[stack.length - 1];

            if (node.left !== null && !map.has(node.left))  stack.push(node.left);
            else if (node.right !== null && !map.has(node.right))  stack.push(node.right);
            else {
                node = stack.pop();

                let leftHeight = map.get(node.left);
                let rightHeight = map.get(node.right);

                if (Math.abs(leftHeight - rightHeight) > 1) return false;

                let height = 1 + Math.max(leftHeight, rightHeight);

                map.set(node, height);
            }
        }

        return true;
    }
}
