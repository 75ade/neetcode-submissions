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
    diameterOfBinaryTree(root) {
        let stack = [root];
        let map = new Map();
        map.set(null, [0, 0]);

        while (stack.length > 0){
            let node = stack[stack.length - 1];

            // Post-order traversal
            if (node.left && !map.has(node.left)){
                stack.push(node.left);
            }
            else if (node.right && !map.has(node.right)){
                stack.push(node.right);
            }
            else {
                node = stack.pop();

                let [leftHeight, leftDiameter] = map.get(node.left);
                let [rightHeight, rightDiameter] = map.get(node.right);

                let height = 1 + Math.max(leftHeight, rightHeight);
                let diameter = Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));

                map.set(node, [height, diameter]);
            }
        }

        return map.get(root)[1];

    }
}
