public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        int n = nums.Length;
        int[] res = new int[n];

        for (int i = 0; i < n; i++){
            int temp = 1;
            for (int j = 0; j < n; j++){
                if (i != j) temp *= nums[j];
            }
            res[i] = temp;
        }

        return res;
    }
}
