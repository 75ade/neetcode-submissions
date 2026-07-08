class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let close = new Set([")", "}", "]"]);
        let open = new Set(["(", "{", "["]);

        for (let i = 0; i < s.length; i++){
            if (close.has(s[i])){
                if ((stack[stack.length - 1] === "(" && s[i] === ")") ||
                    (stack[stack.length - 1] === "{" && s[i] === "}") ||
                    (stack[stack.length - 1] === "[" && s[i] === "]")){
                    stack.pop();
                }
                else {
                    return false;
                }
            }
            else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
