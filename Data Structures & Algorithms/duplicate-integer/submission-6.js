class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let bag = new Set();

        for (let num of nums) {
            if (bag.has(num))   return true;
            bag.add(num);
        }

        return false;
    }
}
