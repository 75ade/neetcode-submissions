public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length)  return false;
        
        Dictionary<char, int> dict = new Dictionary<char, int>();

        for (int i = 0; i < s.Length; i++){
            if (!dict.ContainsKey(s[i]))   dict[s[i]] = 0;
            dict[s[i]]++;
        }

        foreach (char c in t){
            if (!dict.ContainsKey(c))   return false;
            dict[c]--;
        }

        foreach(var item in dict){
            if (item.Value != 0)   return false;
        }

        return true;
    }
}
