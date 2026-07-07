class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let diff;

        for (let i = 0; i < prices.length - 1; i++){
            for (let j = i + 1; j < prices.length; j++){
                diff = prices[j] - prices[i];
                if (diff > maxProfit)   maxProfit = diff;
            }
        }

        return maxProfit;
    }
}
