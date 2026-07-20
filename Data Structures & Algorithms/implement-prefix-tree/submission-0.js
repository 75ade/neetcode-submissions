class TreeNode {
    constructor(){
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for (let i = 0; i < word.length; i++){
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);

            if (curr.children[index] === null){
                curr.children[index] = new TreeNode();
            }

            curr = curr.children[index];
        }

        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;

        for (let i = 0; i < word.length; i++){
            let index = word[i].charCodeAt(0) - "a".charCodeAt(0);

            if (curr.children[index] === null)  return false;
            curr = curr.children[index];
        }
        return curr.isEndOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for (let i = 0; i < prefix.length; i++){
            let index = prefix[i].charCodeAt(0) - "a".charCodeAt(0);

            if (curr.children[index] === null)  return false;
            curr = curr.children[index];
        }

        return true;
    }
}
