class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let curr = [];
        let res = [];

        this.backtrack(0, nums, target, curr, res);
        return res;
    }

    backtrack(index, nums, target, curr, res){
        if (target === 0){
            res.push([...curr]);
        }
        else if (target < 0 || index >= nums.length){
            return;
        }
        else {
            curr.push(nums[index]);
            this.backtrack(index, nums, target - nums[index], curr, res);

            curr.pop();
            this.backtrack(index + 1, nums, target, curr, res);
        }
    }
}
