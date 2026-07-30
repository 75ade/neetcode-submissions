public class Solution {
    private int[][] directions = new int[][] {
        new int[] {-1, 0}, new int[] {1, 0},
        new int[] {0, -1}, new int[] {0, 1}
    };
    
    public void BFS(bool[,] visited, Queue<(int, int)> edges, char[][] board){
        while (edges.Count > 0){
            var (row, col) = edges.Dequeue();
            visited[row, col] = true;

            foreach (var dir in directions){
                int nextRow = row + dir[0];
                int nextCol = col + dir[1];

                if (
                    nextRow >= 0 && nextRow < board.Length &&
                    nextCol >= 0 && nextCol < board[0].Length &&
                    board[nextRow][nextCol] == 'O' &&
                    !visited[nextRow, nextCol]
                ){
                    edges.Enqueue((nextRow, nextCol));
                    // visited[nextRow, nextCol] = true;
                }
            }
        }
    }

    public void Solve(char[][] board) {
        int ROWS = board.Length;
        int COLS = board[0].Length;

        bool[,] visited = new bool[ROWS, COLS];

        Queue<(int, int)> edges = new Queue<(int, int)>();

        for (int r = 0; r < ROWS; r++){
            if (r == 0 || r == ROWS - 1){
                for (int c = 0; c < COLS; c++)
                    if (board[r][c] == 'O') edges.Enqueue((r, c));
            }
            else {
                if (board[r][0] == 'O') edges.Enqueue((r, 0));
                if (board[r][COLS - 1] == 'O')  edges.Enqueue((r, COLS - 1));
            }
        }

        BFS(visited, edges, board);

        for (int r = 0; r < ROWS; r++){
            for (int c = 0; c < COLS; c++){
                if (board[r][c] == 'O' && !visited[r, c]){
                    board[r][c] = 'X';
                }
            }
        }
    }
}
