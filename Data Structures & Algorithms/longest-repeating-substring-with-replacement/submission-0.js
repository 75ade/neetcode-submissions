class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let seen = new Set(s);
        let res = 0;

        for (const c of seen){
            let left = 0;
            let count = 0;

            for (let right = 0; right < s.length; right++){
                if (s[right] === c) count++;

                while (right - left + 1 - count > k){
                    if (s[left] === c)  count--;
                    left++;
                }

                res = Math.max(res, right - left + 1);
            }
        }

        return res;
    }
}
