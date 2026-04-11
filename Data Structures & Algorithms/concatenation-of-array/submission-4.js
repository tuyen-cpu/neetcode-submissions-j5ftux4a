class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let length = nums.length
        let ans = [];
        for(let i =0;i<length;i++){
            ans[i]=ans[i+length]=nums[i]
        }
        return ans
    }
}
