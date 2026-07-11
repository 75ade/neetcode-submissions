class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length < 2)   return s.length;
        
        let left = 0;
        let right = 0;
        let seen = new Set();
        let maxLength = -1;

        while (right < s.length){
            // if (right >= s.length){
            //     right = s.length - 1;
            // }
            
            if (!seen.has(s[right])){
                seen.add(s[right]);
                right++;
            }
            else {
                maxLength = Math.max(maxLength, right - left);
                seen.delete(s[left]);
                left++;
            }

            // if (left === right){
            //     right++;
            // }
            if (right === s.length) maxLength = Math.max(maxLength, right - left);
        }

        return maxLength;
    }
}
