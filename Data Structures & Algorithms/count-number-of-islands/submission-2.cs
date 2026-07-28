public class Solution {
    public bool IsSafe(char[][] grid, bool[][] visited, int r, int c){
        int n = grid.Length;
        int m = grid[0].Length;

        return (
            r >= 0 && r < n &&
            c >= 0 && c < m &&
            grid[r][c] == '1' && 
            visited[r][c] == false
        );
    }
    
    public void BFS(char[][] grid, bool[][] visited, int currentRow, int currentCol){
        // The 2 matrices below represent coordinates of 4 directions: 
        //  Left
        //  Downward
        //  Upward
        //  Right
        int[] directionRow = {-1, 0, 0, 1};
        int[] directionCol = {0, -1, 1, 0};
        
        Queue<(int, int)> q = new Queue<(int, int)>();
        q.Enqueue((currentRow, currentCol));
        visited[currentRow][currentCol] = true;

        while (q.Count > 0){
            var (row, column) = q.Dequeue();

            for (int k = 0; k < 4; k++){
                int newRow = row + directionRow[k];
                int newCol = column + directionCol[k];

                if (this.IsSafe(grid, visited, newRow, newCol)){
                    q.Enqueue((newRow, newCol));
                    visited[newRow][newCol] = true;
                }
            }
        }
    }

    public int NumIslands(char[][] grid) {
        int n = grid.Length;
        int m = grid[0].Length;

        bool[][] visited = new bool[n][];
        for (int i = 0; i < n; i++){
            visited[i] = new bool[m];
        }

        int numberOfIslands = 0;

        for (int i = 0; i < n; i++){
            for (int j = 0; j < m; j++){
                if (grid[i][j] == '1' && !visited[i][j]){
                    this.BFS(grid, visited, i, j);
                    numberOfIslands++;
                }
            }
        }

        return numberOfIslands;
    }
}
