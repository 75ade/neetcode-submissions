class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        let stack = [];
        let time = (target - pairs[0][0]) / pairs[0][1];
        let currentTime;

        stack.push(time);

        for (let i = 1; i < pairs.length; i++){
            currentTime = (target - pairs[i][0]) / pairs[i][1];

            if (currentTime > time){
                time = currentTime;
                stack.push(time);
            }
        }

        return stack.length;
    }
}
