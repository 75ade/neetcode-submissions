class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++){
            if (map.has(target - nums[i])){
                return i < map.get(target - nums[i]) ? [i, map.get(target - nums[i])] : [map.get(target - nums[i]), i];
            }
            
            map.set(nums[i], i);
        }
    }
}
