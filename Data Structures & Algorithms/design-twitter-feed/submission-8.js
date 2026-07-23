class Twitter {
    constructor() {
        this.followMap = new Map();
        this.postMap = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let map = this.postMap;
        this.time++;

        if (!map.has(userId)){
            // let maxHeap = new MaxPriorityQueue();
            // maxHeap.enqueue(tweetId);
            // map.set(userId, maxHeap);
        
            map.set(userId, [[tweetId, this.time]]);
        }
        else {
            // map.get(userId).enqueue(tweetId);
            map.get(userId).push([tweetId, this.time]);
        }
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let followMap = this.followMap;
        let postMap = this.postMap;
        let news = new PriorityQueue((a, b) => b[1] - a[1]);
        let res = [];

        // Get posts from other followees

        if (followMap.has(userId)){
            let followees = followMap.get(userId);
            // console.log(`followees: ${followees.size}`);

            if (followees.size > 0){
                for (const followeeId of followees){
                    if (followeeId !== userId){
                        let posts = postMap.get(followeeId);

                        for (const post of posts){
                            news.enqueue(post);
                        }
                    }
                }
            }
        }

        // Get posts from the user himself/herself
        if (postMap.has(userId)){
            let userPosts = postMap.get(userId);
            
            if (userPosts.length > 0){
                for (const post of userPosts){
                    news.enqueue(post);
                }
            }
        }

        

        for (let i = 1; i <= 10; i++){
            if (news.front() !== null){
                let post = news.dequeue();
                console.log(post);
                res.push(post[0]);
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
        let map = this.followMap;

        if (!map.has(followerId)){
            let hs = new Set();
            hs.add(followeeId);
            map.set(followerId, hs);
        }
        else {
            map.get(followerId).add(followeeId);
        }
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        let map = this.followMap;

        if (map.has(followerId)){
            map.get(followerId).delete(followeeId);
        }
    }
}
