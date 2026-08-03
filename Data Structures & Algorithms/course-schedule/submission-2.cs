public class Solution {
    public bool CanFinish(int numCourses, int[][] prerequisites) {
        List<List<int>> adj = new List<List<int>>();
        int[] indegree = new int[numCourses];
        Queue<int> q = new Queue<int>();
        int visited = 0;

        for (int i = 0; i < numCourses; i++){
            adj.Add(new List<int>());
        }

        foreach (var pair in prerequisites){
            adj[pair[1]].Add(pair[0]);
            indegree[pair[0]]++;
        }

        for (int i = 0; i < numCourses; i++){
            if (indegree[i] == 0){
                q.Enqueue(i);
            }
        }

        while (q.Count > 0){
            int node = q.Dequeue();
            visited++;

            foreach (int neighbor in adj[node]){
                indegree[neighbor]--;
                if (indegree[neighbor] == 0){
                    q.Enqueue(neighbor);
                }
            }
        }

        return visited == numCourses;
    }
}
