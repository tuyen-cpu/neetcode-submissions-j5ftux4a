class Solution {
    public static int longestConsecutive(int[] nums) {
        int length = nums.length;
        if(length==0) return 0;
        Arrays.sort(nums);

        int max=1;
        int count =1;
        System.out.println(Arrays.toString(nums));
        for(int i=0;i<length; i++){
            if(i<length-1){
                if(nums[i]+1==nums[i+1]){
                    count++;
                } else if(nums[i]==nums[i+1]){
                    continue;
                } else{
                   if(count>max) max =count;
                    count=1;
                }
            }

        }

        return Math.max(max,count);
    }
}
