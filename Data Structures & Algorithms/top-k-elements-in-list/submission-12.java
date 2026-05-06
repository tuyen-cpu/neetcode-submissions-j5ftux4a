class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int i: nums){
            map.put(i, map.getOrDefault(i,0)+1);
        }
        List<int[]> list = new ArrayList<>();
        for(Map.Entry<Integer, Integer> entry: map.entrySet()){
            list.add(new int[]{entry.getKey(), entry.getValue()});
        }

        list.sort((a1,a2)-> a2[1]-a1[1]);
        int[] result = new int[k];
        for(int i =0; i<result.length;i++){
            result[i]=list.get(i)[0];
        }
        return result;

    }
}
