class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int n = numbers.length;
        int j = n - 1;
        for (int i = 0; i < n;) {
            if (numbers[i] + numbers[j] == target)
                return new int[] {i + 1, j + 1};
            else if (numbers[i] + numbers[j] > target)
                j--;
            else if (numbers[i] + numbers[j] < target)
                i++;
        }
        return new int[] {};
    }
}
