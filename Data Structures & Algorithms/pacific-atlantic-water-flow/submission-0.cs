public class Solution {
    private int[][] directions = new int[][]{
        new int[] {1, 0}, new int[] {-1, 0},
        new int[] {0, 1}, new int[] {0, -1}
    };

    public List<List<int>> PacificAtlantic(int[][] heights) {
        int ROWS = heights.Length;
        int COLS = heights[0].Length;
        List<List<int>> res = new List<List<int>>();

        bool[,] pac = new bool[ROWS, COLS];
        bool[,] atl = new bool[ROWS, COLS];

        Queue<(int, int)> pacQ = new Queue<(int, int)>();
        Queue<(int, int)> atlQ = new Queue<(int, int)>();

        for (int r = 0; r < ROWS; r++){
            pacQ.Enqueue((r, 0));
            atlQ.Enqueue((r, COLS - 1));
        }

        for (int c = 0; c < COLS; c++){
            pacQ.Enqueue((0, c));
            atlQ.Enqueue((ROWS - 1, c));
        }

        BFS(pac, pacQ, heights);
        BFS(atl, atlQ, heights);

        for (int r = 0; r < ROWS; r++){
            for (int c = 0; c < COLS; c++){
                if (pac[r, c] == true && atl[r, c] ==  true){
                    res.Add(new List<int> {r, c});
                }
            }
        }

        return res;
    }

    public void BFS(bool[,] ocean, Queue<(int, int)> oceanQ, int[][] heights){
        while (oceanQ.Count > 0){
            var (row, col) = oceanQ.Dequeue();
            ocean[row, col] = true;
            
            for (int k = 0; k < 4; k++){
                int nextRow = row + directions[k][0];
                int nextCol = col + directions[k][1];

                if (
                    nextRow >= 0 && nextRow < heights.Length &&
                    nextCol >= 0 && nextCol < heights[0].Length &&
                    !ocean[nextRow, nextCol] && heights[row][col] <= heights[nextRow][nextCol]    
                ){
                    oceanQ.Enqueue((nextRow, nextCol));
                }
            }
        }
    }
}
