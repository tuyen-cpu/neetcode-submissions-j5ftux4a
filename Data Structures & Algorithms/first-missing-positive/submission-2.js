class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let length = nums.length
        const seen = Array(length).fill(false)

        for(let num of nums){
            if(num>0 && num<=length){
                seen[num-1]=true
            }
        }
        for(let i = 0; i<length;i++){
            if(!seen[i]) return i+1
        }
        return length+1
    }
}
