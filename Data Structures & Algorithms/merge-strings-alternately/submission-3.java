class Solution {
    public String mergeAlternately(String word1, String word2) {
        int n = Math.max(word1.length(), word2.length());
        int i = 0;
        StringBuilder re = new StringBuilder();
        while (i < n) {
            if (i < word1.length()) {
                re.append(word1.charAt(i)); 
            }

            if (i < word2.length()) {
                re.append(word2.charAt(i)); 
            }

            i++;
        }
        return re.toString();
    }
}