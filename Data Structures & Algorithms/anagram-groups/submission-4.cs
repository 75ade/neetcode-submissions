public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> dict = new Dictionary<string, List<string>>();

        foreach (string s in strs){
            int[] count = new int[26];
            for (int i = 0; i < s.Length; i++){
                count[s[i] - 'a']++;
            }

            string key = string.Join(",", count);

            if (!dict.ContainsKey(key)) dict[key] = new List<string>();
            dict[key].Add(s);
        }

        List<List<string>> res = new List<List<string>>();
        foreach (var item in dict){
            res.Add(item.Value);
        }

        return res;
    }
}
