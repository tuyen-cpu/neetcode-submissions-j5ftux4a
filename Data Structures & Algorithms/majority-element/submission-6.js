class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let result =0;
        let count =0;
        for(let num of nums){
            if(count===0) result = num
            count += (result===num)?1:-1
        }
        return result;

    }
}
