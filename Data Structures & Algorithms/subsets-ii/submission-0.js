class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let subset = [];
        let res = [];
        nums.sort((a, b) => a - b);
        this.backtrack(0, nums, subset, res);
        return res;
    }

    backtrack(index, nums, subset, res){
        if (index === nums.length){
            res.push([...subset]);
            return;
        }

        subset.push(nums[index]);
        this.backtrack(index + 1, nums, subset, res);

        subset.pop();

        while (index + 1 < nums.length && nums[index] === nums[index + 1]){
            index++;
        }

        this.backtrack(index + 1, nums, subset, res);
    }
}
