public class Solution {
    public bool IsValidSudoku(char[][] board) {
        Dictionary<int, HashSet<char>> rows = new Dictionary<int, HashSet<char>>();
        Dictionary<int, HashSet<char>> cols = new Dictionary<int, HashSet<char>>();
        Dictionary<string, HashSet<char>> boxes = new Dictionary<string, HashSet<char>>();
    
        for (int r = 0; r < 9; r++){
            for (int c = 0; c < 9; c++){
                if (board[r][c] == '.') continue;

                string boxKey = (r / 3) + "," + (c / 3);

                if (
                    (rows.ContainsKey(r) && rows[r].Contains(board[r][c])) ||
                    (cols.ContainsKey(c) && cols[c].Contains(board[r][c])) ||
                    (boxes.ContainsKey(boxKey) && boxes[boxKey].Contains(board[r][c]))
                ){
                    return false;
                }

                if (!rows.ContainsKey(r))   rows[r] = new HashSet<char>();
                if (!cols.ContainsKey(c))   cols[c] = new HashSet<char>();
                if (!boxes.ContainsKey(boxKey)) boxes[boxKey] = new HashSet<char>();

                rows[r].Add(board[r][c]);
                cols[c].Add(board[r][c]);
                boxes[boxKey].Add(board[r][c]);
            }
        }

        return true;
    }
}
