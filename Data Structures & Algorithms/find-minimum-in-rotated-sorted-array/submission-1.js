class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let middle;
        let res = nums[0];


        while (left <= right){
            if (nums[left] <= nums[right]){
                res = Math.min(res, nums[left]);
                break;
            }

            middle = left + Math.floor((right - left) / 2);
            res = Math.min(res, nums[middle]);

            if (nums[middle] >= nums[left]){
                left = middle + 1;
            }
            else {
                right = middle - 1;
            }
        }

        return res;
    }
}
