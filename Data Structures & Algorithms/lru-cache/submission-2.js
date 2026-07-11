class Node {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    remove(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.next = null;
        node.prev = null;
    }

    insert(node) {
        const prevRightNode = this.right.prev;
        prevRightNode.next = node;
        node.prev = prevRightNode;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);

            return node.val;
        }
        else {
            return -1;
        }

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)){
            let node = this.cache.get(key);
            this.remove(node);
            
            node = new Node(key, value);
            this.insert(node);
            this.cache.set(key, node);
        }
        else {
            if (this.cache.size === this.cap){
                const lRUNode = this.left.next;
                this.cache.delete(lRUNode.key);
                this.remove(lRUNode);

                const node = new Node(key, value);
                this.cache.set(key, node);
                this.insert(node);
            }
            else {
                const node = new Node(key, value);
                this.cache.set(key, node);
                this.insert(node);
            }
        }
    }
}
