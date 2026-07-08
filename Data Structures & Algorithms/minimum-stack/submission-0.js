class MinStack {
    constructor() {
        this.s = [];
        this.min = Number.POSITIVE_INFINITY;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (val < this.min) this.min = val;
        this.s.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.s.pop();
        this.min = Number.POSITIVE_INFINITY;

        let left = 0;
        let right = this.s.length - 1;

        while (left <= right){
            if (this.s[left] < this.min) this.min = this.s[left];
            if (this.s[right] < this.min)    this.min = this.s[right];
            left++;
            right--;
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.s[this.s.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
