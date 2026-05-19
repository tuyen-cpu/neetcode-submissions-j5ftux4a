class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n = s.length
        let temp;
        for(let i=0; i<n/2;i++){
            if(s[i]!==s[n-1-i]) {
                temp=s[i]
                s[i]=s[n-1-i]
                s[n-1-i]=temp
            }
        }
        return s
    }
}
