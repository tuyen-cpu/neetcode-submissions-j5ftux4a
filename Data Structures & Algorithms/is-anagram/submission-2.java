class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length()!=t.length()) return false;
        Map<Character, Integer> map = new HashMap<>();
        for(int i = 0; i< s.length(); i++){
            map.put(s.charAt(i), map.getOrDefault(s.charAt(i),0)+1);
        }

        for(Character i:t.toCharArray()){
            
            if(map.containsKey(i) && map.get(i)>0){
                map.put(i,map.getOrDefault(i,0)-1);
            } else return false;
        }
        return true;
    }
}
