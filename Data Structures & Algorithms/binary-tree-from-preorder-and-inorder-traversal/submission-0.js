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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pre_idx = 0;
        let map = new Map();

        for (let i = 0; i < inorder.length; i++){
            map.set(inorder[i], i);
        }

        function dfs(left, right){
            if (left > right)   return null;
            
            let rootVal = preorder[pre_idx++];
            let root = new TreeNode(rootVal);
            let mid = map.get(rootVal);

            root.left = dfs(left, mid - 1);
            root.right = dfs(mid + 1, right);

            return root;
        }

        return dfs(0, preorder.length - 1);
    }
}
