class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let counts = new Array(26).fill(0);
        for (let i = 0; i < tasks.length; i++){
            counts[tasks[i].charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        let pq = new MaxPriorityQueue();
        let q = new Queue();
        let time = 0;

        for (const c of counts){
            if (c !== 0)    pq.enqueue(c);
        }

        while (pq.size() > 0 || q.size() > 0){
            time++;

            if (pq.size() > 0){
                let t = pq.dequeue() - 1;
                if (t !== 0){
                    q.enqueue([t, time + n]);
                }
            }

            if (q.size() > 0 && q.front()[1] === time){
                pq.enqueue(q.dequeue()[0]);
            }
        }

        return time;
    }
}
