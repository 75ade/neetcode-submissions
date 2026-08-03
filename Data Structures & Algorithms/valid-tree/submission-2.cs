public class Solution {
    public bool BFS(int start, List<List<int>> adj, bool[] visited){
        Queue<(int, int)> q = new Queue<(int, int)>();
        
        q.Enqueue((start, -1));
        visited[start] = true;

        while (q.Count > 0){
            var (node, parent) = q.Dequeue();

            foreach (var nei in adj[node]){
                if (!visited[nei]){
                    visited[nei] = true;
                    q.Enqueue((nei, node));
                }
                else if (nei != parent){
                    return true;
                }
            }   
        }

        return false;
    }

    public bool ValidTree(int n, int[][] edges) {
        List<List<int>> adj = new List<List<int>>();
        bool[] visited = new bool[n];
        

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
