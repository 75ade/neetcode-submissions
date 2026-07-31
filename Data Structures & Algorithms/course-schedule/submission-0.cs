public class Solution {
    public bool CanFinish(int numCourses, int[][] prerequisites) {
        int[] indegree = new int[numCourses];  
        int visited = 0;
        List<List<int>> adj = new List<List<int>>();
        Queue<int> q = new Queue<int>();

        for (int i = 0; i < numCourses; i++){
            adj.Add(new List<int>());
        }

        foreach (int[] p in prerequisites){
            indegree[p[0]]++;
            adj[p[1]].Add(p[0]);
        }

        for (int i = 0; i < numCourses; i++){
            if (indegree[i] == 0)   q.Enqueue(i);
        }

        while (q.Count > 0){
            var vertex = q.Dequeue();
            visited++;

            foreach (int u in adj[vertex]){
                indegree[u]--;
                if (indegree[u] == 0)   q.Enqueue(u);
            }
        }

        return visited == numCourses;
    }
}
