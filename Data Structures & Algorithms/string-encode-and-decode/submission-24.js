class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result=''
        for (let str of strs){
            result+=str.length+'#'+str
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // console.log(str)
        const result =[]
        let i =0;

        let j;
        let length;
        while(i<str.length){
            j=i
            while(str[j]!=='#') j++
            length = parseInt(str.slice(i,j+1))
            j++
            result.push(str.slice(j,j+length))
            i=j+length
        }
        return result
    }
}
