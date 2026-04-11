class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        const mapS = new Map()
        for(let ch of s){
            mapS.set(ch,(mapS.get(ch)||0)+1)
        }

        for(let ch of t){
            if(mapS.has(ch)&& mapS.get(ch)>0){
              
                mapS.set(ch,mapS.get(ch)-1)
            }else  return false
           
        }
        return true

    }
}
