public class Solution {
    public bool CanFinish(int numCourses, int[][] prerequisites) {
        List<List<int>> adj = new List<List<int>>();
        int[] indegree = new int[numCourses];
        Queue<int> q = new Queue<int>();
        int visited = 0;

        for (int i = 0; i < numCourses; i++){
            adj.Add(new List<int>());
        }

        foreach (var p in prerequisites){
            indegree[p[0]] += 1;
            adj[p[1]].Add(p[0]);
        }

        for (int i = 0; i < numCourses; i++){
            if (indegree[i] == 0)   q.Enqueue(i);
        }

        while (q.Count > 0){
            var u = q.Dequeue();
            visited++;

            foreach (var nei in adj[u]){
                indegree[nei] -= 1;
                if (indegree[nei] == 0) q.Enqueue(nei);
            }
        }

        return visited == numCourses;
    }
}
