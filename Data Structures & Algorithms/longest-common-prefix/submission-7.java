class Solution {
    public String longestCommonPrefix(String[] strs) {
        String result = strs[0];
        for(int i =0;i<strs.length;i++){
            if(!strs[i].startsWith(result)){
                result = result.substring(0,result.length()-1);
                i--;
            }
        }
        return result;
    }
}