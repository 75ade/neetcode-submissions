class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length < 2)    return [0];

        let left = 0;
        let right = left + 1;
        let res = [];

        while (left < temperatures.length - 1){
            if (temperatures[left] < temperatures[right]){
                res.push(right - left);
                left++;
                right = left + 1;
                continue;
            }

            right++;

            if (right === temperatures.length){
                res.push(0);
                left++;
                right = left + 1;
            }
        }

        res.push(0);
        return res;
    }
}
