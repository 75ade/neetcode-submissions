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

        let arr = Array.from(count.entries()).map(([num, freq]) => [freq, parseInt(num)]);
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map(pair => pair[1]);
    }
}
