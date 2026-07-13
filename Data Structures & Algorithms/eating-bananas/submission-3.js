class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Sort in decreasing order
        let max = 0;
        for (let p of piles){
            if (p > max)    max = p;
        }
        
        let left = 1;
        let right = max;
        let middle;
        let kMin = Number.POSITIVE_INFINITY;
        let eatTime;

        while (left <= right){
            middle = left + Math.floor((right - left) / 2);
            eatTime = 0;

            for (let b of piles){
                eatTime += middle > b ? 1 : Math.ceil(b / middle);    
            }

            if (eatTime <= h){
                if (middle < kMin)   kMin = middle;
                right = middle - 1;
            }
            else if (eatTime > h)   left = middle + 1;
        }

        return kMin;
    }
}
