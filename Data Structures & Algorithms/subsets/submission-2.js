class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let subset = [];
        let res = [];

        this.recursionSubset(0, nums, subset, res);
        return res;
    }

    recursionSubset(index, nums, subset, res){
        if (index === nums.length){
            res.push([...subset]);
            return;
        }

        subset.push(nums[index]);
        this.recursionSubset(index + 1, nums, subset, res);

        subset.pop();
        this.recursionSubset(index + 1, nums, subset, res);
    }
}
