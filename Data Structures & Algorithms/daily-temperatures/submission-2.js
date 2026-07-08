class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];

        for (let i = 0; i < temperatures.length; i++){
            const t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length - 1][0]){
                let idx = stack.pop()[1];
                res[idx] = i - idx;

            }
            stack.push([t, i]);
        }

        return res;
    }
}
