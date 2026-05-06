class Solution {
    public String encode(List<String> strs) {
        StringBuilder builder = new StringBuilder();
        for (String str : strs) {
            builder.append(str.length()).append("#").append(str);
        }
        return builder.toString();
    }

    public List<String> decode(String str) {
        List<String> re = new ArrayList<>();

        int i = 0;
        int j = 0;
        int length;
        while (i < str.length()) {
            j = i;
            while (str.charAt(j) != '#') {
                j++;
            }
            length = Integer.parseInt(str.substring(i, j));
            j++;
            re.add(str.substring(j, j + length));
            i=j + length;
           
        }
        return re;
    }
}
