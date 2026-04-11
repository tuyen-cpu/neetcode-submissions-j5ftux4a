class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        let map = new Map();
        for(let str of s){
            if(!map.has(str)){
                map.set(str,1)
            }else{
                map.set(str, map.get(str)+1)
            }
        }

        for(let str of t){
            if(map.has(str)&&map.get(str)>0){
                map.set(str, map.get(str)-1);
            }else{
                return false
            }
        }
        return true
    }
}
