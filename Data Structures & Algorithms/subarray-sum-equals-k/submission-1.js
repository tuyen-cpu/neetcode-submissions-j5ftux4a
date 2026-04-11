class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSumMap = new Map();
        prefixSumMap.set(0,1);
        let sum =0;
        let temp;
        let result =0;
        for(let num of nums){
            sum+=num
            temp=sum-k;
            result+=prefixSumMap.get(temp)||0
            prefixSumMap.set(sum,(prefixSumMap.get(sum)||0)+1)
        }
        return result
    }
}
