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
            console.log("vào #")
            console.log("i=",i)
            console.log("ki tu",str.charAt(i))
            i++;
            continue;
        }
  
        console.log("tinh count")
        let count = +str.slice(j,i)
        i++; j++
        res.push(str.slice(i,i+count))
        console.log("sau khi cat theo",i,i+count,str.slice(i,i+count))
        i=i+count;
        j=i
        console.log("hetvong i=",i)
        console.log("hetvong j=",j)
       }
       
      
    console.log(res)



        return res;

    }
}
