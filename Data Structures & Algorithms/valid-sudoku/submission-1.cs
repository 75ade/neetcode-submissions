public class Solution {
    public bool IsValidSudoku(char[][] board) {
        Dictionary<int, HashSet<char>> rows = new Dictionary<int, HashSet<char>>();
        Dictionary<int, HashSet<char>> cols = new Dictionary<int, HashSet<char>>();
        Dictionary<string, HashSet<char>> squares = new Dictionary<string, HashSet<char>>();

        int size = board.Length;
        for (int r = 0; r < size; r++){
            for (int c = 0; c < size; c++){
                if (board[r][c] == '.') continue;

                string squareKey = (r / 3) + "," + (c / 3);

                if (
                    (rows.ContainsKey(r) && rows[r].Contains(board[r][c])) || 
                    (cols.ContainsKey(c) && cols[c].Contains(board[r][c])) ||
                    (squares.ContainsKey(squareKey) && squares[squareKey].Contains(board[r][c]))
                )   return false;

                if (!rows.ContainsKey(r))   rows[r] = new HashSet<char>();
                if (!cols.ContainsKey(c))   cols[c] = new HashSet<char>();
                if (!squares.ContainsKey(squareKey))    squares[squareKey]  = new HashSet<char>();

                rows[r].Add(board[r][c]);
                cols[c].Add(board[r][c]);
                squares[squareKey].Add(board[r][c]);

            }
        }

        return true;
    }
}
