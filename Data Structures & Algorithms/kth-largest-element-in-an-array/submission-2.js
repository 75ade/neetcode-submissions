class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let pq = [];

        for (const num of nums){
            this.enqueue(num, pq);
        }

        while (pq.length > k){
            this.dequeue(pq);
        }

        return pq[0];
    }

    parent(index){
        return Math.floor((index - 1) / 2);
    }

    left(index){
        return 2 * index + 1;
    }
    
    right(index){
        return 2 * index + 2;
    }

    swap(i, j, arr){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    bubbleUp(index, arr){
        while(index > 0){
            let parent = this.parent(index);
            if (arr[parent] <= arr[index])  break;
            this.swap(index, parent, arr);
            index = parent;
        }
    }

    bubbleDown(index, arr){
        let length = arr.length;
        while (true) {
            let left = this.left(index);
            let right = this.right(index);
            let smallest = index;

            if (left < length && arr[left] < arr[smallest]) smallest = left;
            if (right < length && arr[right] < arr[smallest])   smallest = right;

            if (smallest === index) break;
            this.swap(index, smallest, arr);
            index = smallest;
        }
    }

    enqueue(val, arr){
        arr.push(val);
        this.bubbleUp(arr.length - 1, arr);
    }

    dequeue(arr){
        this.swap(0, arr.length - 1, arr);
        let res = arr.pop();
        this.bubbleDown(0, arr);
        return res;
    }
}
