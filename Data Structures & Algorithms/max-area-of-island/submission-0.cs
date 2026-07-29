public class Solution {
    public bool IsSafe(int[][] grid, bool[][] visited, int r, int c){
        int n = grid.Length;
        int m = grid[0].Length;

        return (
            r >= 0 && r < n &&
            c >= 0 && c < m &&
            grid[r][c] == 1 &&
            !visited[r][c]
        );
    }

    public int BFS(int[][] grid, bool[][] visited, int currentRow, int currentCol, int maxArea){
        int[] directionRow = {-1, 0, 1, 0};
        int[] directionCol = {0, -1, 0, 1};

        Queue<(int, int)> q = new Queue<(int, int)>();
        q.Enqueue((currentRow, currentCol));
        visited[currentRow][currentCol] = true;

        int area = 0;

        while (q.Count > 0){
            var (row, col) = q.Dequeue();
            area++;

            for (int k = 0; k < 4; k++){
                int nextRow = row + directionRow[k];
                int nextCol = col + directionCol[k];

                if (IsSafe(grid, visited, nextRow, nextCol)){
                    q.Enqueue((nextRow, nextCol));
                    visited[nextRow][nextCol] = true;
                }
            }
        }

        if (area > maxArea) return area;
        return maxArea;
    }

    public int MaxAreaOfIsland(int[][] grid) {
        int n = grid.Length;
        int m = grid[0].Length;

        bool[][] visited = new bool[n][];
        for (int i = 0; i < n; i++){
            visited[i] = new bool[m];
        }

        int maxArea = 0;

        for (int r = 0; r < n; r++){
            for (int c = 0; c < m; c++){
                if (grid[r][c] == 1 && !visited[r][c]){
                    maxArea = BFS(grid, visited, r, c, maxArea);
                }
            }
        }

        return maxArea;
    }
}
