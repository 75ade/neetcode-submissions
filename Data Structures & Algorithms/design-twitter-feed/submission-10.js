class Twitter {
    constructor() {
        this.time = 0;
        this.followMap = new Map();
        this.tweetMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.time -= 1;
        
        if (!this.tweetMap.has(userId)){
            this.tweetMap.set(userId, []);
        }
        
        let tweet = [this.time, tweetId];
        this.tweetMap.get(userId).push(tweet);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        let res = []

        if (!this.followMap.has(userId)){
            this.followMap.set(userId, new Set());
        }

        this.followMap.get(userId).add(userId);
        const followeesId = this.followMap.get(userId);

        for (const followeeId of followeesId){
            if (this.tweetMap.has(followeeId)){
                const tweets = this.tweetMap.get(followeeId);
                const index = tweets.length - 1;
                const [time, tweetId] = tweets[index];
                const nextIndex = index - 1;
                minHeap.enqueue([time, tweetId, followeeId, nextIndex]);
            }
        }

        while (minHeap.size() > 0 && res.length < 10){
            const [time, tweetId, followeeId, nextIndex] = minHeap.dequeue();
            res.push(tweetId);

            if (nextIndex >= 0){
                const [oldTime, oldTweetId] = this.tweetMap.get(followeeId)[nextIndex];
                const oldIndex = nextIndex - 1;
                minHeap.enqueue([oldTime, oldTweetId, followeeId, oldIndex]);
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)){
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)){
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
