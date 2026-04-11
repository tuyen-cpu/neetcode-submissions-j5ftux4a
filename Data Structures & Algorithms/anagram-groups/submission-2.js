class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    sortAZ(str){
        return str.split('').sort().join('')
    }
    
    groupAnagrams(strs) {
        const mapA = new Map();
        for(let str of strs){
            let sortedStr =this.sortAZ(str)
            if(mapA.has(sortedStr)){
                mapA.set(sortedStr,[...mapA.get(sortedStr),str])
            }else{
                mapA.set(sortedStr,[str])
            }
        }
        
        return [...mapA.values()]
    }
}
