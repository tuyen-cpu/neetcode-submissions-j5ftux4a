class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = new Set(nums);
        if(result.size!==nums.length) return true
        return false
    }
}
