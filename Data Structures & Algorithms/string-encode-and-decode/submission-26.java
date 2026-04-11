class Solution {

    public String encode(List<String> strs) {
        StringBuilder result = new StringBuilder();
        for(String s:strs){
            result.append(s.length()).append('#').append(s);
        }
        return result.toString();
    }

    public List<String> decode(String str) {
        List<String> result = new ArrayList<>();
        for(int i=0; i<str.length(); i++){
            int j=i+1;
            while(str.charAt(j)!='#') j++;
            Integer length = Integer.parseInt(str.substring(i, j));
            i=j;
            result.add(str.substring(i+1, i+1+length));
            i+=length;
        }
        return result;
    }
}
