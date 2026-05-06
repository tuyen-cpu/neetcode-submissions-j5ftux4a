class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<String> set = new HashSet<>();
        char value;

        for(int row=0; row<9;row++){
            for(int col=0; col<9;col++){
                value = board[row][col];
                if(value=='.') continue;

                String rowVal = "row-"+row+"-"+value;
                String colVal = "col-"+col+"-"+value;
                String boxVal = "box-"+row/3+"-"+col/3+"-"+value;
                
                if(set.contains(rowVal)||set.contains(colVal)||set.contains(boxVal)){
                    return false;
                }
                set.add(rowVal);
                set.add(colVal);
                set.add(boxVal);
            }
        }
        return true;
    }
}
