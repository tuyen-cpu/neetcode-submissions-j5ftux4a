class Solution {
    public String longestCommonPrefix(String[] strs) {
       StringBuilder sb = new StringBuilder(strs[0]);
       for(int i = 1; i<strs.length;i++){
        if(strs[i].startsWith(sb.toString())) continue;
        sb.deleteCharAt(sb.length()-1);
        i--;
       }
       return sb.toString();
    }
}