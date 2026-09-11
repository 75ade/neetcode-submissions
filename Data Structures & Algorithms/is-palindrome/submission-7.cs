public class Solution {
    public bool IsPalindrome(string s) {
        if (s.Length == 1)  return true;

        string sLower = s.ToLower();

        int left = 0;
        int right = sLower.Length - 1;

        while (left < right){
            while (left < right && !this.IsAlphanumeric(sLower[left]))  left++;
            while (right > left && !this.IsAlphanumeric(sLower[right])) right--;

            if (sLower[left] != sLower[right])  return false;
            left++;
            right--;
        }

        return true;
    }

    private bool IsAlphanumeric(char c){
        return  (c >= 'a' && c <= 'z') ||
                (c >= 'A' && c <= 'Z') ||
                (c >= '0' && c <= '9');
    }
}
