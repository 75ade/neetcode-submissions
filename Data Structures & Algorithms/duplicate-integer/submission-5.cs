public class Solution {
    public bool hasDuplicate(int[] nums) {
        HashSet<int> bag = new HashSet<int>();

        foreach (int num in nums){
            if (bag.Contains(num))  return true;
            bag.Add(num);
        }

        return false;
    }
}