public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int zeroCount = 0;
        int product = 1;

        for (int i = 0; i < nums.Length; i++){
            if (nums[i] == 0)   zeroCount++;
            else    product *= nums[i];
        }

        if (zeroCount >= 2) return new int[nums.Length];

        int[] res = new int[nums.Length];
        
        for (int i = 0; i < nums.Length; i++){
            if (zeroCount == 1){
                res[i] = nums[i] == 0 ? product : 0;
            }
            else {
                res[i] = product / nums[i];
            }
        }

        return res;
    }
}
