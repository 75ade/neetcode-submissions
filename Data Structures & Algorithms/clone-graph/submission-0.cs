/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> neighbors;

    public Node() {
        val = 0;
        neighbors = new List<Node>();
    }

    public Node(int _val) {
        val = _val;
        neighbors = new List<Node>();
    }

    public Node(int _val, List<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

public class Solution {
    public Node CloneGraph(Node node) {
        if (node == null)   return null;
        
        Queue<Node> q = new Queue<Node>();
        Dictionary<Node, Node> oldToNew = new Dictionary<Node, Node>();

        q.Enqueue(node);
        oldToNew[node] = new Node(node.val);

        while (q.Count > 0){
            var cur = q.Dequeue();

            foreach(Node neighbor in cur.neighbors){
                if (!oldToNew.ContainsKey(neighbor)){
                    q.Enqueue(neighbor);
                    oldToNew[neighbor] = new Node(neighbor.val);
                }
                oldToNew[cur].neighbors.Add(oldToNew[neighbor]);
            }
        }

        return oldToNew[node];
    }
}
