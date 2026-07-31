public class Solution {
    public bool BFS(int start, List<List<int>> adj, bool[] visited){
        Queue<int[]> q = new Queue<int[]>();
        q.Enqueue(new int[] {start, -1}); // Queue stores (node, parent)
        visited[start] = true;

        while (q.Count > 0){
            int node = q.Peek()[0];
            int parent = q.Peek()[1];
            q.Dequeue();

            foreach (var neighbor in adj[node]){
                if (!visited[neighbor]){
                    visited[neighbor] = true;
                    q.Enqueue(new int[] {neighbor, node});
                }
                else if (neighbor != parent){
                    return true;
                }
            }
        }

        return false;
    }
    
    public bool ValidTree(int n, int[][] edges) {
        bool[] visited = new bool[n];
        List<List<int>> adj = new List<List<int>>();

        for (int i = 0; i < n; i++){
            adj.Add(new List<int>());
        }

        foreach (int[] pair in edges){
            adj[pair[0]].Add(pair[1]);
            adj[pair[1]].Add(pair[0]);
        }

        for (int i = 0; i < n; i++){
            if (!visited[i] && BFS(0, adj, visited)){
                return false;
            }
        }

        return true;
    }
}
