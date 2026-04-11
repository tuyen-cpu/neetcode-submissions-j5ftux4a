class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a,b)=>a-b)
        console.log(nums)
        return nums[Math.floor((nums.length)/2)]
    }
}
