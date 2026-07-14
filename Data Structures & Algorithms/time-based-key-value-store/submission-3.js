class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let pair = [value, timestamp];

        if (this.keyStore.has(key)){
            this.keyStore.get(key).push(pair);
        }
        else {
            this.keyStore.set(key, [pair]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (this.keyStore.has(key) && this.keyStore.get(key)[0][1] <= timestamp){
            let left = 0;
            let right = this.keyStore.get(key).length - 1;
            let middle;

            while (left <= right){
                middle = left + Math.floor((right - left) / 2);


                if (this.keyStore.get(key)[middle][1] === timestamp){
                    return this.keyStore.get(key)[middle][0];
                }
                else if (this.keyStore.get(key)[middle][1] > timestamp){
                    right = middle - 1;
                }
                else {
                    left = middle + 1;
                }
            }

            return right < left ? this.keyStore.get(key)[right][0] : this.keyStore.get(key)[left][0];
        }

        return "";
    }
}
