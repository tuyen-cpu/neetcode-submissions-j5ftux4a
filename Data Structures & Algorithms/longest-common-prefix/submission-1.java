class Solution {
    public String longestCommonPrefix(String[] strs) {
        String result = strs[0];
        for(int i =1; i<strs.length;i++){
            if(!strs[i].contains(result)){
               result= result.substring(0,result.length()-1); 
               i--;  
            }
            if(i==strs.length-1&&!strs[i].contains(result)){
                return "";
            }
        }
        return result;
    }
}