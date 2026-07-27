class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        this.backtrack(0, nums, res);
        return res;
    }

    backtrack(index, nums, res){
        if (index === nums.length){
            res.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++){
            [nums[index], nums[i]] = [nums[i], nums[index]];
            this.backtrack(index + 1, nums, res);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }

    }
}
