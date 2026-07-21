class TreeNode {
    constructor(){
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;

        for (let c of word){
            let index = c.charCodeAt(0) - "a".charCodeAt(0);
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
        return this.dfs(word, 0, this.root);
    }

    dfs(word, idx, node){
        let curr = node;

        for (let i = idx; i < word.length; i++){
            if (word[i] === "."){
                for (const child of curr.children){
                    if (child !== null && this.dfs(word, i + 1, child)){
                        return true;
                    }
                }
                return false;
            }
            else {
                let index = word[i].charCodeAt(0) - "a".charCodeAt(0);
                if (curr.children[index] === null)  return false;
                curr = curr.children[index];
            }
        }

        return curr.isEndOfWord;
    }
}
