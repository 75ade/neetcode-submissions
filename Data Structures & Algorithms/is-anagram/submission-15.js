class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length === 1 && t.length === 1 && s[0] === t[0])   return true;
        if (s.length !== t.length)  return false;

        let sMap = new Map();
        let tMap = new Map();

        for (let idx = 0; idx < s.length; idx++){
            if (!sMap.has(s[idx]))  sMap.set(s[idx], 0);
            sMap.set(s[idx], sMap.get(s[idx]) + 1);

            if (!tMap.has(t[idx]))  tMap.set(t[idx], 0);
            tMap.set(t[idx], tMap.get(t[idx]) + 1); 
        }

        for (let key of sMap.keys()){
            if (!tMap.has(key) || sMap.get(key) !== tMap.get(key)) return false;    
        }

        return true;
    }   
}
