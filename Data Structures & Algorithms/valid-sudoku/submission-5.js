class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const set = new Set()
        for(let row=0; row<9;row++){
            for(let col=0;col<9;col++){
                let value =  board[row][col]
                if(value==='.') continue;
                let colItem = `col[${row}]:${value}`
                let rowItem = `row[${col}]:${value}`
                let boxItem = `box[${Math.floor(row/3)}-${Math.floor(col/3)}]:${value}`
            if(set.has(colItem)||set.has(rowItem)||set.has(boxItem)) return false;

            set.add(colItem)
            set.add(rowItem)
            set.add(boxItem)
        }
        }
        return true;
    }
}
