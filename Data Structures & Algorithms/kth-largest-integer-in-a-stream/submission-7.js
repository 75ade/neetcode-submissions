class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.pq = [];
    
        for (const num of nums){
            this.enqueue(num);
        }

        while (this.pq.length > k){
            this.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.enqueue(val);

        while (this.pq.length > this.k){
            this.dequeue();
        }

        return this.pq[0];
    }

    parent(index){
        return Math.floor((index - 1) / 2);
    }

    leftChild(index){
        return 2 * index + 1;
    }

    rightChild(index){
        return 2 * index + 2;
    }

    swap(i, j){
        let arr = this.pq;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    bubbleUp(index){
        let arr = this.pq;
        while (index > 0){
            let parent = this.parent(index);
            if (arr[parent] <= arr[index])    break;
            this.swap(index, parent);
            index = parent;
        }
    }

    bubbleDown(index){
        let arr = this.pq;
        let length = arr.length;

        while (true) {
            let left = this.leftChild(index);
            let right = this.rightChild(index);
            let smallest = index;

            if (left < length && arr[left] < arr[smallest]) smallest = left;
            if (right < length && arr[right] < arr[smallest])   smallest = right;

            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;            
        }
    }

    enqueue(val) {
        let arr = this.pq;
        arr.push(val);
        this.bubbleUp(arr.length - 1);
    }

    dequeue(){
        let arr = this.pq;
        this.swap(0, arr.length - 1);
        let res = arr.pop();
        this.bubbleDown(0);

        return res;
    }
}
