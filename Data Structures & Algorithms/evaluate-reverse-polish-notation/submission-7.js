class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let first;
        let second;

        for (let i = 0; i < tokens.length; i++){
            if (!"+-*/".includes(tokens[i])){
                stack.push(parseInt(tokens[i]));
            }
            else{
                second = stack.pop();
                first = stack.pop();

                if (tokens[i] === '+')  stack.push(first + second);
                else if (tokens[i] === '-') stack.push(first - second);
                else if (tokens[i] === '*') stack.push(first * second);
                else if (tokens[i] === '/') stack.push(Math.trunc(first / second));
            }
        }

        return stack.pop();
    }
}
