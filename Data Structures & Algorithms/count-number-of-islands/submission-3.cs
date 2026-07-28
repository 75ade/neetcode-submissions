public class Solution {
    public bool IsSafe(char[][] grid, bool[][] visited, int r, int c){
        int n = grid.Length;
        int m = grid[0].Length;

        return (
            r >= 0 && r < n &&
            c >= 0 && c < m &&
            grid[r][c] == '1' &&
            !visited[r][c]
        );
    }

    public void DFS(char[][] grid, bool[][] visited, int currentRow, int currentCol){
        int[] directionRow = {-1, 0, 0, 1};
        int[] directionCol = {0, -1, 1, 0};

        visited[currentRow][currentCol] = true;

        for (int k = 0; k < 4; k++){
            int newRow = currentRow + directionRow[k];
            int newCol = currentCol + directionCol[k];

            if (IsSafe(grid, visited, newRow, newCol)){
                DFS(grid, visited, newRow, newCol);
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

        int islandCount = 0;

        for (int r = 0; r < n; r++){
            for (int c = 0; c < m; c++){
                if (grid[r][c] == '1' && !visited[r][c]){
                    DFS(grid, visited, r, c);
                    islandCount++;
                }
            }
        }

        return islandCount;
    }
}
