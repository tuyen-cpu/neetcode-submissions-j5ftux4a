class Solution {
    public int[] topKFrequent(int[] nums, int k) {
      Map<Integer, Integer> map = new HashMap<>();

      for(Integer num: nums){
        map.put(num, map.getOrDefault(num,0)+1);
      }

      Map<Integer,Integer> mapSortedByKey = map.entrySet().stream()
      .sorted(Map.Entry.<Integer,Integer>comparingByValue().reversed())
      .limit(k)
      .collect(Collectors.toMap(
        Map.Entry:: getKey,
        Map.Entry:: getValue,
        (e1, e2)-> e1, LinkedHashMap::new
      ));
      return mapSortedByKey.keySet().stream().mapToInt(e->e.intValue()).toArray();
    }
}
