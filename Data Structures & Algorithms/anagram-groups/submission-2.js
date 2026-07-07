class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let str;
        let map = new Map();
        let res = [];

        for (let i = 0; i < strs.length; i++){
            str = strs[i].split('').sort().join('');

            if (!map.has(str)){
                map.set(str, new Array(strs[i]));
            }
            else {
                map.get(str).push(strs[i]);
            }
        }

        for (const key of map.keys()){
            res.push(map.get(key));
        }

        return res;
    }
}
