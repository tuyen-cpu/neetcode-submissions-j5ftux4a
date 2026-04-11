class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer,Integer> prefixSums = new HashMap<>();
        prefixSums.put(0,1);
        int sum=0;
        int result =0;
        int temp;
        for(int num:nums){
            sum+=num;
            temp=sum-k;
            result+=prefixSums.getOrDefault(temp,0);
            prefixSums.put(sum,prefixSums.getOrDefault(sum,0)+1);
        }
        return result;
    }
}