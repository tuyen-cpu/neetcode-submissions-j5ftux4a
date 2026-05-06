class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        const re = [1]
        for(let i=1; i<n;i++){
            re[i]=re[i-1]*nums[i-1]
        }

        let temp=1;
        for(let i=n-1;i>=0;i--){
            re[i]*=temp;
            temp*=nums[i]
        }
        return re;
    }
}
