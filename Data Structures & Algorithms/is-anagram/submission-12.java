class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()) return false;
        Map<Character, Integer> map = new HashMap<>();
        for(Character ch: s.toCharArray()){
            map.put(ch, map.getOrDefault(ch, 0)+1);
        }

        for(Character ch: t.toCharArray()){
            if(map.containsKey(ch) && map.getOrDefault(ch, 0)>0){
                map.put(ch, map.getOrDefault(ch, 0)-1);
            }else return false;
        }
        return true;
    }
}
