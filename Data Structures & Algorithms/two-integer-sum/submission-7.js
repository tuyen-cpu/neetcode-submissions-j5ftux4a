class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map =new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],i);
        }


        for(let i=0;i<nums.length;i++){
            console.log(i)
            let temp = target - nums[i]
            if(map.has(temp) && map.get(temp)!=i){
                return [i,map.get(temp)]
            }
        }
return null;
    }
}
