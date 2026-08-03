public class Solution {
    public void BFS(int start, List<List<int>> adj, bool[] visited){
        Queue<int> q = new Queue<int>();

        q.Enqueue(start);
        visited[start] = true;

        while (q.Count > 0){
            int node = q.Dequeue();

            foreach (int neighbor in adj[node]){
                if (!visited[neighbor]){
                    visited[neighbor] = true;
                    q.Enqueue(neighbor);
                }
            }
        }
    }

    public int CountComponents(int n, int[][] edges) {
        List<List<int>> adj = new List<List<int>>();
        bool[] visited = new bool[n];
        int count = 0;

        for (int i = 0; i < n; i++){
            adj.Add(new List<int>());
        }

        foreach (int[] pair in edges){
            adj[pair[0]].Add(pair[1]);
            adj[pair[1]].Add(pair[0]);
        }

        for (int i = 0; i < n; i++){
            if (!visited[i]){
                BFS(i, adj, visited);
                count++;
            }
        }

        return count;
    }
}
