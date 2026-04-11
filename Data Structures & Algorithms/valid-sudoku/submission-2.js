class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const squareMap = new Map();
        for(let i =0; i<9;i++){
            const set = new Set()
            for(let j= 0;j<9;j++){
                if(board[j][i]!='.'&&set.has(board[j][i])) return false
                set.add(board[j][i])
            }
           
        }
        for(let i =0; i<9;i++){
            const set = new Set()
            for(let j= 0;j<9;j++){
                if(board[i][j]!='.'&&set.has(board[i][j])) return false
                set.add(board[i][j])
            }
        }

         for(let i =0; i<9;i++){
             for(let j= 0;j<9;j++){
                if(board[i][j]==='.') continue;
                let index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if(!squareMap.has(index)){
                    squareMap.set(index,new Set([board[i][j]]))
                }else{
                    const currentSet = squareMap.get(index);
            // Kiểm tra board[i][j] có trong Set chưa
            if (currentSet.has(board[i][j])) {
                return false;
            }
            currentSet.add(board[i][j]);
                }
                
             }
         }
         return true

    }
}
