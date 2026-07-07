class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length === 1)    return 0;

        let left = 0;
        let right = 1;
        let maxProfit = 0;
        let diff;

        while (right < prices.length){
            if (prices[left] < prices[right]){
                diff = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, diff);
            }
            else {
                left = right;
            }

            right++;
        }

        return maxProfit;
    }
}
