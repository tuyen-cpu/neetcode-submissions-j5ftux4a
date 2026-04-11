class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    stringSorted(str){
        return str.split('').sort().join('')
    }
    groupAnagrams(strs) {
        const map = new Map()
        for(let str of strs){
            if(map.has(this.stringSorted(str))){
map.set(this.stringSorted(str)
                ,[...map.get(this.stringSorted(str)),str])
            }
            else{
                map.set(this.stringSorted(str),[str])
            }
                
        }

        return [...map.values()];
    }
}
