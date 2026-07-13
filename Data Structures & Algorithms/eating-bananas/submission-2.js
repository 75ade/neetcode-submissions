class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // Sort in decreasing order
        piles.sort((a, b) => b - a);


        let left = 1;
        let right = piles[0];   // piles[0] is the largest number in piles array
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
