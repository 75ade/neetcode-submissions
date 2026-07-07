class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)  return false;

        let sMap = new Map();
        let tMap = new Map();

        for (let i = 0; i < s.length; i++){
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        for (const key of sMap.keys()){
            if (sMap.get(key) !== tMap.get(key))    return false;
        }

        return true;
    }
}
