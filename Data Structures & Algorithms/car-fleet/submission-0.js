class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = [];
        let fleetCount = 1;
        let time;
        let currentTime;

        for (let i = 0; i < position.length; i++){
            arr.push([position[i], speed[i]]);    
        }

        arr.sort((a, b) => b[0] - a[0]);
        time = (target - arr[0][0]) / arr[0][1];

        for (let i = 1; i < arr.length; i++){
            currentTime = (target - arr[i][0]) / arr[i][1];
            if (currentTime > time){
                time = currentTime;
                fleetCount++;
            }
        }

        return fleetCount;
    }
}
