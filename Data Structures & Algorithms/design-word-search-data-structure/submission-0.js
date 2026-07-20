class WordNode{
    constructor(){
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new WordNode();
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
                curr.children[index] = new WordNode();
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

    dfs(word, j, root){
        let curr = root;

        for (let i = j; i < word.length; i++){
            const c = word[i];
            if (c === "."){
                for (let child of curr.children){
                    if (child !== null && this.dfs(word, i + 1, child))  return true;
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
