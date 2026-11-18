class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freqMap = new HashMap<>();

        for(int n : nums){
            freqMap.put(n, freqMap.getOrDefault(n,0)+1);
        }

    List<Integer>[] buckets = new List[nums.length+1];

    for(int key : freqMap.keySet()){
        int freq = freqMap.get(key);
        if(buckets[freq]==null) buckets[freq] = new ArrayList<>();
        buckets[freq].add(key);
    }

    int[] res = new int[k];
    int idx=0;
    for(int i=buckets.length-1; i>=0 && idx<k ;i--){
        if(buckets[i]==null) continue;
        for(int n: buckets[i]){
            res[idx++]=n;;
            if(idx==k) return res;
        }
        
    }
    
return res;
    }
}
