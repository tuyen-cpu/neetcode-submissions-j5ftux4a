class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for(let s of strs){
            result+=s.length+'#'+s
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result =[]
        let i =0
        let j=0
        let length=0
        while(i<str.length){
            j = i+1;
            while(str[j]!='#') j++
            length= parseInt(str.substring(i,j))
            j+=1
            result.push(str.substring(j, length +j))
            i = j+length
        }
return result

    }
}
