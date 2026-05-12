class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = new Map();
        map.set(0,1)
        let cursum = 0, result=0
        for(let num of nums){
            cursum+=num
            let diff= cursum-k;
            result+=(map.get(diff)||0)
            map.set(cursum, (map.get(cursum)||0) +1)
        }
        return result;
    }
}
