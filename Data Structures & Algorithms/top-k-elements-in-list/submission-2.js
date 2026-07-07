class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();

        for (let i = 0; i < nums.length; i++){
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);
        }

        // Turn the hash map to a list where each element in the list is [freq, num]
        let arr = Array.from(count.entries()).map(([num, freq]) => [freq, parseInt(num)]);
        
        // Sort the list base on freq
        arr.sort((a, b) => b[0] - a[0]);

        // Return a sliced list from 0 to k - 1, which contains only the num
        return arr.slice(0, k).map(pair => pair[1]);
    }
}
