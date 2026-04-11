class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result =[];
        let zeroFlag = 0
        let product =nums.reduce((acc,curr)=>{
            if(curr!=0) return acc*curr
            else {
                zeroFlag ++
                return acc
            };
            });
            if(zeroFlag>=2){
                return Array(nums.length).fill(0)
            }
        for(let i=0;i<nums.length;i++){
            if(zeroFlag==1){
                if(nums[i]!==0) result[i]=0
                else result[i]=product
            }
            else{
                result[i]=product/nums[i]
            }
            
        }
        return result;
    }
}
