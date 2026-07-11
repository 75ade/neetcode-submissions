class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let res = 0;
        let left = 0;
        let maxF = 0;
        
        for (let right = 0; right < s.length; right++){
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            maxF = Math.max(maxF, map.get(s[right]));

            while (right - left + 1 - maxF > k){
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            res = Math.max(res, right - left + 1);
        }

        return res;
    }
}
