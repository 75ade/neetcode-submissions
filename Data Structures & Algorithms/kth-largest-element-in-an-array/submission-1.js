class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let pq = new MinPriorityQueue();

        for (const num of nums){
            pq.enqueue(num);
        }

        while (pq.size() > k){
            pq.dequeue();
        }

        return pq.front();
    }
}
