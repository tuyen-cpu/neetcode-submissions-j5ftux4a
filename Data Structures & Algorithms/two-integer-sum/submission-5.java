class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = nums.length;
        int[] result = new int[2];
        for (int i = 0; i < n; i++) {
            map.put(nums[i], i);
        }
         for (int i = 0; i < n; i++) {
            int num = nums[i];
            int temp = target -num;
            if(map.containsKey(temp)&& map.get(temp)!=i){
                result[0]=i;
                result[1]=map.get(temp); 
                return result;
            }
        }
        return new int[0];
    }
}
