class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxPriorityQueue();
        
        for (const stone of stones){
            heap.enqueue(stone);
            // if (heap.size() === 2){
            //     let h1 = heap.dequeue();
            //     let h2 = heap.dequeue();
            //     let diff = h1 - h2;

            //     if (diff > 0)   heap.enqueue(diff);
            // }
        }

        while (heap.size() > 1){
            let h1 = heap.dequeue();
            let h2 = heap.dequeue();
            let diff = h1 - h2;

            if (diff > 0)   heap.enqueue(diff);
        }

        return heap.size() === 1 ? heap.dequeue() : 0;
    }
}
