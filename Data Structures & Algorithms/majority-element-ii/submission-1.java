class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        Map<Integer, Integer> map = new HashMap<>();
        for(int num:nums) {
            map.put(num, map.getOrDefault(num,0)+1);
        }
        int temp = Math.round(nums.length/3);
        map.forEach((key,value)->{
            if(value>temp) result.add(key);
        });
        return result;
    }
}