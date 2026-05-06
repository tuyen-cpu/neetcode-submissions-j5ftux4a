class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length==0)return 0;
        Arrays.sort(nums);
        
        int result =1;
        int temp =result;
        for(int i=1;i<nums.length;i++){
            System.out.println("i: "+ i);
            System.out.println("temp: "+ temp);
            System.out.println("result: "+ result);


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
