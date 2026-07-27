class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let curr = [];
        let res = [];
        candidates.sort((a, b) => a - b);
        this.backtrack(0, candidates, target, curr, res);
        return res;
    }

    backtrack(index, candidates, target, curr, res){
        if (target === 0){
            res.push([...curr]);
        }
        else if (target < 0 || index > candidates.length){
            return;
        }
        else{
            curr.push(candidates[index]);
            this.backtrack(index + 1, candidates, target - candidates[index], curr, res);
        
            curr.pop();

            while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]){
                index++;
            }

            this.backtrack(index + 1, candidates, target, curr, res);
        }
    }
}
