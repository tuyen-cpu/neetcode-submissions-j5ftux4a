class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let max=0;
        const map = new Map()
        for(let num of nums){
            if(num>=0){
                map.set(num, (map.get(num)||0)+1)
                if(num>max) max = num
            }
        }
        for(let i=0; i<=max+1;i++){
             if(i!==0 &&!map.get(i)) return i;
        }
        return 1
    }
}
