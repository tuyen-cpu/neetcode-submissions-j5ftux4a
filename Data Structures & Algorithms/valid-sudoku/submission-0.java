class Solution {
    public boolean isValidSudoku(char[][] board) {
         Map<Integer, Set<Character>> colMap = new HashMap<>();
        Map<Integer, Set<Character>> rowMap = new HashMap<>();
        Map<Integer, Set<Character>> squareMap = new HashMap<>();
        for(int i =0; i<board[0].length;i++){
            Set<Character> set = new HashSet<>();
            for(int j =0; j<board[0].length;j++){
                if(board[j][i]!='.' && set.contains(board[j][i])) return false;
                set.add(board[j][i]);

            }
            colMap.put(i,set);
        }
        for(int i =0; i<board[0].length;i++){
            Set<Character> set = new HashSet<>();
            for(int j =0; j<board[0].length;j++){
                if(board[i][j]!='.' && set.contains(board[i][j])) return false;
                set.add(board[i][j]);

            }
            rowMap.put(i,set);
        }
        for(int i =0; i<9;i++){

            for(int j =0; j<9;j++){
                if(board[i][j]=='.'){
                continue;
                }
                int index = (i / 3) * 3 + (j / 3);
                if(squareMap.get(index)==null){
                    squareMap.put(index,new HashSet<>(Arrays.asList(board[i][j])));
                }else{
                    if(!(squareMap.get(index).add(board[i][j]))){
                        return false;
                    }
                }


            }

        }
        return true;


    }
}
