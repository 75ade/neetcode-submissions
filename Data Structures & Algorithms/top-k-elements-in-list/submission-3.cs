public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        List<int> res = new List<int>();

        foreach(int num in nums){
            if (!dict.ContainsKey(num)) dict[num] = 0;
            dict[num]++;
        }

        while (k > 0){
            int maxVal = 0;
            int maxKey = 0;
            foreach(var item in dict){
                if (item.Value > maxVal) {
                    maxVal = item.Value;
                    maxKey = item.Key;
                }    
            }
            res.Add(maxKey);
            dict.Remove(maxKey);
            k--;
        }
        
        return res.ToArray();
    }
}
