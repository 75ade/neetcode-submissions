class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let res = [];

        for (let i = 0; i < strs.length; i++){
            let arr = new Array(26).fill(0);
            let str = strs[i];

            for (let j = 0; j < str.length; j++){
                arr[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = arr.join(',');

            if (!map.has(key)){
                map.set(key, new Array(str));
            }
            else {
                map.get(key).push(str);
            }
        }

        for (const key of map.keys()){
            res.push(map.get(key));
        }

        return res;
    }
}
