class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = strs[0];
        for(let i=1; i<strs.length; i++){
            if(!strs[i].startsWith(result)) {
                result = result.slice(0,-1)
                i--
            }
            
        }
        return result
    }
}
