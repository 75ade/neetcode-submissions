public class Solution {
    public bool IsFreshOrange(int[][] grid, int r, int c){
        int n = grid.Length;
        int m = grid[0].Length;

        return (
            r >= 0 && r < n &&
            c >= 0 && c < m &&
            grid[r][c] == 1
        );
    }
    
    public int OrangesRotting(int[][] grid) {
        int[] directionRow = {-1, 0, 1, 0};
        int[] directionCol = {0, -1, 0, 1};

        int n = grid.Length;
        int m = grid[0].Length;
        
        Queue<(int, int)> rottenQ = new Queue<(int, int)>();
        int freshCounts = 0;
        int minute = 0;

        for (int r = 0; r < n; r++){
            for (int c = 0; c < m; c++){
                if (grid[r][c] == 2)    rottenQ.Enqueue((r, c));
                else if (grid[r][c] == 1)    freshCounts++;
            }
        }

        while (rottenQ.Count > 0 && freshCounts > 0){
            int size = rottenQ.Count;
            for (int i = 0; i < size; i++){
                var (row, col) = rottenQ.Dequeue();

                for (int k = 0; k < 4; k++){
                    int nextRow = row + directionRow[k];
                    int nextCol = col + directionCol[k];

                    if (IsFreshOrange(grid, nextRow, nextCol)){
                        grid[nextRow][nextCol] = 2;
                        freshCounts--;
                        rottenQ.Enqueue((nextRow, nextCol));
                    }
                }    
            }

            minute++;
        }

        return freshCounts == 0 ? minute : -1;
    }
}
