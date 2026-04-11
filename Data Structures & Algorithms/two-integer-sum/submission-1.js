class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let [index,num] of nums.entries()){
            let temp = target - num
    
            if(map.has(temp)){
       
                return [index,map.get(temp)]
            }
 
            map.set(num,index)
        }
        return null
    }
}
