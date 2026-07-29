public class Solution {
    private int ROWS;
    private int COLS;
    private int INF = int.MaxValue;

    public bool IsSafeIsland(int[][] grid, bool[][] visited, int r, int c){
        return (
            r >= 0 && r < ROWS &&
            c >= 0 && c < COLS &&
            grid[r][c] == INF &&
            !visited[r][c]
        );
    }
    
    public void islandsAndTreasure(int[][] grid) {
        ROWS = grid.Length;
        COLS = grid[0].Length;
        
        int[] directionRow = {-1, 0, 1, 0};
        int[] directionCol = {0, -1, 0, 1};

        bool[][] visited = new bool[ROWS][];

        for (int i = 0; i < ROWS; i++){
            visited[i] = new bool[COLS];            
        }

        Queue<(int, int)> q = new Queue<(int, int)>();

        for (int r = 0; r < ROWS; r++){
            for (int c = 0; c < COLS; c++){
                if (grid[r][c] == 0){
                    visited[r][c] = true;
                    q.Enqueue((r, c));
                }
            }
        }

        int dist = 1;

        while (q.Count > 0){
            int size = q.Count;
            for (int i = 0; i < size; i++){
                var (row, col) = q.Dequeue();

                for (int k = 0; k < 4; k++){
                    int nextRow = row + directionRow[k];
                    int nextCol = col + directionCol[k];

                    if (IsSafeIsland(grid, visited, nextRow, nextCol)){
                        grid[nextRow][nextCol] = dist;
                        visited[nextRow][nextCol] = true;
                        q.Enqueue((nextRow, nextCol));
                    }
                }
            }
            dist++;
        }
    }
}
