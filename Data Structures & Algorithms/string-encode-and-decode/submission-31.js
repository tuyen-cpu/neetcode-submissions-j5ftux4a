class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res ="";
        for(let str of strs){
            res+=str.length+"#"+str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i=0;
        let j=0
       for(i=0; i<str.length;){
        if(str.charAt(i)!=='#'){
            i++;
            continue;
        }
  
        let count = +str.slice(j,i)
        i++; j++
        res.push(str.slice(i,i+count))
        i=i+count;
        j=i
       }
        return res;

    }
}
