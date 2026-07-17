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
    isValidBST(root) {
        let arr = [];
        this.dfs(root, arr);

        if (arr.length === 1)   return true;

        let left = 0;
        let right = left + 1;

        while (right < arr.length){
            if (arr[left] >= arr[right])    return false;
            left++;
            right++;
        }

        return true;
    }

    dfs(node, arr){
        if (node === null)  return;

        this.dfs(node.left, arr);
        arr.push(node.val);
        this.dfs(node.right, arr);
    }
}
