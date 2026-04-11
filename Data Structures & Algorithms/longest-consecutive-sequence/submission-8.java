class Solution {
    public static int longestConsecutive(int[] nums) {
        int length = nums.length;
        if(length==0) return 0;
        if(length==1) return 1;
        Arrays.sort(nums);
       List<Integer> list = new ArrayList<>(Arrays.asList(new Integer[length]));
        Collections.fill(list, 0);
        int max=1;
        System.out.println(Arrays.toString(nums));
        for(int i=0;i<length; i++){
            if(i<length-1){
                if(nums[i]+1==nums[i+1]){
                    max++;
                    list.set(i,max);
                } else if(nums[i]==nums[i+1]){
                    list.set(i,max);
                    continue;
                } else{
                    list.set(i,max);
                    max=1;
                }
            }

        }

        return Collections.max(list);
    }
}
