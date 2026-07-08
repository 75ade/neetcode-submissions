class MinStack {
    constructor() {
        this.s = [];
        this.minS = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.s.push(val);
        val = Math.min(val, this.minS.length === 0 ? val : this.minS[this.minS.length - 1]);
        this.minS.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.s.pop();
        this.minS.pop();
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
        return this.minS[this.minS.length - 1];
    }
}
