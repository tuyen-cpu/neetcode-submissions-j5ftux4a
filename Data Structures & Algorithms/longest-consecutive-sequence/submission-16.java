class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length==0)return 0;
        Arrays.sort(nums);
        int result =1;
        int temp =result;
        for(int i=1;i<nums.length;i++){
            if(nums[i]==nums[i-1]+1 ){
                temp++;   
                continue;
            }
            if((nums[i]==nums[i-1])){
                continue;
            }
            if(temp>result) result=temp;
            temp=1;
        }
         if(temp>result) result=temp;
        return result;
    }
}
