class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let block = new Map()
        for(let i=0; i<9; i++){
            let s = new Set();
            for(let j=0; j<9;j++){
                if(board[i][j]!=='.'&&s.has(board[i][j])) return false
                s.add(board[i][j])
            }
        }
        for(let i=0; i<9; i++){
            let s = new Set();
            for(let j=0; j<9;j++){
                if(board[j][i]!=='.'&&s.has(board[j][i])) return false
                s.add(board[j][i])
            }
        }
        for(let i=0; i<9; i++){
            for(let j=0; j<9;j++){
                if(board[i][j]==='.') continue;
                let indexBlock = Math.floor(i/3)*3+Math.floor(j/3)
                const data = block.get(indexBlock)||new Set()
                if(data.has(board[i][j])) return false
                data.add(board[i][j])
                block.set(indexBlock,data)
            }
        }
        return true;
    }
}
