class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = new Map();
        
        for (let i = 0; i < s1.length; i++){
            map.set(s1[i], (map.get(s1[i]) || 0) + 1);
        }

        let left = 0;
        let sum = 0;

        for (let right = 0; right < s2.length; right++){
            if (map.has(s2[right])){
                if (map.get(s2[right]) > 0){
                    map.set(s2[right], map.get(s2[right]) - 1);
                }
                else {
                    while (s2[left] !== s2[right]){
                        if (map.has(s2[left]))  {
                            map.set(s2[left], map.get(s2[left]) + 1);
                        }
                        left++;
                    }

                    if (s2[left] === s2[right]) left++;
                }
            }
            else {
                while (left <= right){
                    if (map.has(s2[left]))  {
                        map.set(s2[left], map.get(s2[left]) + 1);
                    }
                    left++;
                }
            }

            if (right - left + 1 === s1.length){
                sum = 0;
                for (const key of map.keys()){
                    sum += map.get(key);
                }

                if (sum === 0)  return true;
            }
        }

        return false;
    }
}
