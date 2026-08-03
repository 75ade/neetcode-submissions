public class Solution {
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        List<List<int>> adj = new List<List<int>>();
        List<int> indegree = new List<int>();
        Queue<int> q = new Queue<int>();
        List<int> result = new List<int>();

        for (int i = 0; i < numCourses; i++){
            adj.Add(new List<int>());
            indegree.Add(0);
        }

        foreach (var pair in prerequisites){
            adj[pair[1]].Add(pair[0]);
            indegree[pair[0]]++;
        }
        
        for (int i = 0; i < numCourses; i++){
            if (indegree[i] == 0)   q.Enqueue(i);
        }

        while (q.Count > 0){
            int node = q.Dequeue();
            result.Add(node);

            foreach (int neighbor in adj[node]){
                indegree[neighbor]--;
                if (indegree[neighbor] == 0)    q.Enqueue(neighbor);
            }
        }

        return result.Count == numCourses ? result.ToArray() : [];
    }
}
