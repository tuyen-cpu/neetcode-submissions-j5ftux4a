class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const colMap = new Map();
        const rowMap = new Map();
        const blockMap = new Map();
        let block = 0;
        for (let row = 0; row < 9; row++) {
            const mySetCol = new Set();
            colMap.set(row, mySetCol);
            const mySetRow = new Set();
            rowMap.set(row, mySetRow);
            for (let col = 0; col < 9; col++) {
                if (colMap.get(row).has(board[row][col])) {
                    return false;
                }
                if (board[row][col] !== ".") {
                    colMap.get(row).add(board[row][col]);
                }

                if (rowMap.get(row).has(board[col][row])) {
                    return false;
                }
                if (board[col][row] !== ".") {
                    rowMap.get(row).add(board[col][row]);
                }

                block = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                if (!blockMap.has(block)) {
                    const set = new Set();
                    blockMap.set(block, set);
                }
                if (blockMap.get(block).has(board[col][row])) {
                    return false;
                }
                if (board[col][row] !== ".") {
                    blockMap.get(block).add(board[col][row]);
                }
            }
        }
        return true;
    }
}
