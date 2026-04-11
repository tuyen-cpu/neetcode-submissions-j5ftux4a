class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ='';
        for (let str of strs){
            result += str.length+'#'+str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const result = [];
        let i = 0;
        while(i<str.length){
            let j = i;
            while(str[j]!=='#'){
                j++
            }
            let length = parseInt(str.substring(i,j))
            j++
            result.push(str.substring(j,length+j))
            i=j+length
        }
        return result
    }
}
