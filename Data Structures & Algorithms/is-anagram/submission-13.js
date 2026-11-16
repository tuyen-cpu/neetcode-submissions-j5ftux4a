class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !==t.length) return false
        const map1 = new Map()
        for(let letter of s){
           map1.set(letter, (map1.get(letter)||0)+1)
        }
        for(let letter of t){
            if(!map1.get(letter))return false
            map1.set(letter, map1.get(letter)-1)
        }

return true
        
    }
}
