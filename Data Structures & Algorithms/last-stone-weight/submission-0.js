class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let arr = stones;
        arr.sort((a, b) => a - b);

        if (arr.length === 0)   return 0;
        if (arr.length === 1)   return arr[0];
        
        let heavy1 = arr.pop();
        let heavy2 = arr.pop();
        let diff = heavy1 - heavy2;
        if (diff > 0)   arr.push(diff);

        return this.lastStoneWeight(arr);
    }
}
