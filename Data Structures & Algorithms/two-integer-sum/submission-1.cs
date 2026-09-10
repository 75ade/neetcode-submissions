public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++){
            if (!dict.ContainsKey(nums[i])) dict[nums[i]] = i;

            int diff = target - nums[i];
            if (dict.ContainsKey(diff) && dict[diff] != i)  return new int[] {dict[diff], i};
        }

        return new int[] {};
    }
}
