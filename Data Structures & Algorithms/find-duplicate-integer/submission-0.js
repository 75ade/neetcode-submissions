class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let seen = new Set();

        for (let i = 0; i < nums.length; i++){
            if (seen.has(nums[i]))    return nums[i];
            seen.add(nums[i]);
        }

        return 0;
    }
}
