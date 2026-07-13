class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // m rows
        // n columns
        let left = 0;
        let right = matrix[0].length - 1;
        let middle;

        for (let i = 0; i < matrix.length; i++){
            if (target >= matrix[i][left] && target <= matrix[i][right]){
                while (left <= right){
                    middle = left + Math.floor((right - left) / 2);

                    if (target === matrix[i][middle])   return true;
                    else if (target < matrix[i][middle])    right = middle - 1;
                    else if (target > matrix[i][middle])    left = middle + 1;
                }
            }
        }

        return false;
    }
}
