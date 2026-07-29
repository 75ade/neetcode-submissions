public class Solution {
    private int INF = int.MaxValue;

    public bool IsSafe(int[][] grid, bool[][] visited, int r, int c){
        int n = grid.Length;
        int m = grid[0].Length;

        return (
            r >= 0 && r < n &&
            c >= 0 && c < m &&
            grid[r][c] != -1 &&
            !visited[r][c]
        );
    }

    public int BFS(int[][] grid, int currentRow, int currentCol){
        int[] directionRow = {-1, 0, 0, 1};
        int[] directionCol = {0, -1, 1, 0};

        int n = grid.Length;
        int m = grid[0].Length;
        bool[][] visited = new bool[n][];

        for (int i = 0; i < n; i++){
            visited[i] = new bool[m];
        }

        Queue<(int, int)> q = new Queue<(int, int)>();
        q.Enqueue((currentRow, currentCol));
        visited[currentRow][currentCol] = true;

        int steps = 0;

        while (q.Count > 0){
            int size = q.Count;
            for (int i = 0; i < size; i++){
                var (row, col) = q.Dequeue();
                if (grid[row][col] == 0)    return steps;

                for (int k = 0; k < 4; k++){
                    int nextRow = row + directionRow[k];
                    int nextCol = col + directionCol[k];

                    if (IsSafe(grid, visited, nextRow, nextCol)){
                        q.Enqueue((nextRow, nextCol));
                        visited[nextRow][nextCol] = true;
                    }
                }
            }
            
            steps++;
        }

        return INF;
    }

    public void islandsAndTreasure(int[][] grid) {
        int n = grid.Length;
        int m = grid[0].Length;

        for (int r = 0; r < n; r++){
            for (int c = 0; c < m; c++){
                if (grid[r][c] == INF){
                    grid[r][c] = BFS(grid, r, c);
                }
            }
        }
    }
}
