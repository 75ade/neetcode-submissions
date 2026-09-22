class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let count = new Map();

        for (let i = 0; i < nums.length; i++){
            let diff = target - nums[i];

            if (count.has(diff)){
                return [count.get(diff), i];
            }
            count.set(nums[i], i);
        }
    }
}
