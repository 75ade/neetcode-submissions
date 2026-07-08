class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let days = temperatures.length;
        let res = new Array(days).fill(0);
    
        for (let i = 0; i < days - 1; i++){
            for (let j = i + 1; j < days; j++){
                if (temperatures[j] > temperatures[i]){
                    res[i] = j - i;
                    break;
                }
            }
        }

        return res;
    }
}
