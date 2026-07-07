class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right){
            while(left < right && !this.alphaNum(s[left])){
                left++;
            }

            while (right > left && !this.alphaNum(s[right])){
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase())   return false;

            left++;
            right--;
        }

        return true;
    }

    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
