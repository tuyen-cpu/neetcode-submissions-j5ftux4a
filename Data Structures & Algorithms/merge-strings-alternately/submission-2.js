class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let n1 = word1.length;
        let n2 = word2.length;
        let temp1;
        let rest;
        let temp2;
        if (n1 > n2) {
            temp1 = word1.substring(0, n2);
            rest = word1.substring(n2, n1);
            temp2 = word2;
        } else if (n2 > n1) {
            temp2 = word2.substring(0, n1);
            rest = word2.substring(n1, n2);
            temp1 = word1;
        } else {
            temp1 = word1;
            temp2 = word2;
        }
        let re = "";

        for (let i = 0; i < temp1.length; i++) {
            re += temp1[i] + temp2[i];
        }
        if (rest) return re + rest;
        return re;
    }
}
