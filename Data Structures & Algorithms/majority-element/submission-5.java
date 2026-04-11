class Solution {
    public int majorityElement(int[] nums) {
        int result = 0;
        int count = 0;
        for(int num:nums){
            if(count==0) result = num;
            if(num ==result){
                count +=1;
            }else{
                count+=-1;
            }
        }
        return result;
    }
}