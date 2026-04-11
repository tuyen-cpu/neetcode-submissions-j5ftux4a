class Solution {

        // public isAnagram(String s, String t){
        //     if(s.length()!=t.length()) return false;

        //     Map<Character, Integer> map = new HashMap<>();
        //      for(Character ch : s.toCharArray()){
        //         map.put(ch, map.getOrDefault(ch,0)+1);
        //      }
        //      for(Character ch: t.toCharArray()){
        //         if(map.containsKey(ch)&&map.get(ch)>0){
        //             map.put(ch,map.getOrDefault(ch,0)-1);
        //         }else return false;
        //      }
        //      return true;

        // }
public String sortString(String s) {
    char[] arr = s.toCharArray();
    Arrays.sort(arr);
    return new String(arr);
}
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        

        for(String str:strs){
            String strSorted =sortString(str);
            if(map.containsKey(strSorted)){
                map.put(strSorted, 
                Stream.concat(map.get(strSorted).stream(), Stream.of(str)).toList());

            }else{
                map.put(strSorted, List.of(str));
            }
        }

        return new ArrayList<>(map.values());
    }
}
