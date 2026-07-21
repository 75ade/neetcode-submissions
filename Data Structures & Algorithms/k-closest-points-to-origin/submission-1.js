class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const p of points){
            let distance = this.calibrateDistance(p[0], p[1], 0, 0);
            maxHeap.enqueue([distance, p[0], p[1]]);

            if (maxHeap.size() > k) maxHeap.dequeue();
        }

        let res = [];
        while (maxHeap.size() > 0){
            let temp = maxHeap.dequeue();
            res.push([temp[1], temp[2]]);
        }
        
        return res;
    }

    calibrateDistance(x1, y1, x2, y2){
        return Math.sqrt((x1 - x2) ** 2  + (y1 - y2) ** 2);
    }
}
