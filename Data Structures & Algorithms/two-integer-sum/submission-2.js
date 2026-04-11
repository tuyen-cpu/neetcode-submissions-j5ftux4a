class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i = 0; i<nums.length; i++){
            let current = target-nums[i]
            if(map.has(current)) return [map.get(current), i]
            map.set(nums[i],i);
        }
    }
}
