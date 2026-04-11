class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let length = nums.length;
        if(length==0) return 0; 
        nums.sort((a, b) => a - b);
        console.log(nums)
        let count =1;
        let max =1;
        for(let i=0; i<nums.length;i++){
           
                if(nums[i]+1==nums[i+1]){
                count++;
            }else if(nums[i]==nums[i+1]){
                continue;
            }else{
                if(count>max) max =count
                count=1
            }
            
        }
        return Math.max(count,max);
    }
}
