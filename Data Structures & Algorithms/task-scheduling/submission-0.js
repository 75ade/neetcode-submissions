class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let count = new Array(26).fill(0);

        for (const c of tasks){
            count[c.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        let pq = new MaxPriorityQueue();
        for (let i = 0; i < count.length; i++){
            if (count[i] > 0)   pq.enqueue(count[i]);
        }

        let time = 0;
        let q = new Queue();

        while (pq.size() > 0 || q.size() > 0){
            time++;

            if (pq.size() > 0){
                let temp = pq.dequeue() - 1;
                if (temp !== 0){
                    q.enqueue([temp, time + n]);
                }
            }

            if (q.size() > 0 && q.front()[1] === time){
                pq.enqueue(q.dequeue()[0]);
            }
        }

        return time;
    }
}
