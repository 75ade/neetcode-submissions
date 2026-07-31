public class Solution {
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        int[] indegree = new int[numCourses];
        List<List<int>> adj = new List<List<int>>();
        Queue<int> q = new Queue<int>();
        List<int> res = new List<int>();

        for (int i = 0; i < numCourses; i++){
            adj.Add(new List<int>());
        }

        foreach (var p in prerequisites){
            indegree[p[0]]++;
            adj[p[1]].Add(p[0]);        
        }

        for (int i = 0; i < numCourses; i++){
            if (indegree[i] == 0)   q.Enqueue(i);
        }

        while (q.Count > 0){
            var u = q.Dequeue();
            res.Add(u);

            foreach (var neighbor in adj[u]){
                indegree[neighbor]--;
                if (indegree[neighbor] == 0)    q.Enqueue(neighbor);
            }
        }

        return res.Count == numCourses ? res.ToArray() : [];
    }
}
