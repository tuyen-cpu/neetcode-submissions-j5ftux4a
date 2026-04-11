class Solution {

    public String encode(List<String> strs) {
      StringBuilder result = new StringBuilder();
        for (String str : strs) {
            result.append(str.length()).append("#").append(str);
        }
        return result.toString();
    }

    public List<String> decode(String str) {
    List<String> list = new ArrayList<>();
        StringBuilder v = new StringBuilder();
        int i=0;
        int j=0;
        while (i < str.length()) {
           j=i+1;
           while(str.charAt(j)!='#'){
               j++;
           }
           int length = Integer.parseInt(str.substring(i,j));
            list.add(str.substring(j+1,length+1+j));
            i=length+1+j;
        }
        return list;

    }
}
