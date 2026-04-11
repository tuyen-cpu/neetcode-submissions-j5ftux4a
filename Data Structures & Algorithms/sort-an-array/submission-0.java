class Solution {
    public int[] sortArray(int[] nums) {
        if (nums.length <= 1) {
            return nums;
        }

        int centerIndex = nums.length / 2;
        int center = nums[centerIndex];
        List<Integer> leftArr = new ArrayList<>();
        List<Integer> rightArr = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            if (i == centerIndex) continue; // bỏ qua pivot
            if (nums[i] <= center) {
                leftArr.add(nums[i]);
            } else {
                rightArr.add(nums[i]);
            }
        }

        int[] sortedLeft = sortArray(leftArr.stream().mapToInt(Integer::intValue).toArray());
        int[] sortedRight = sortArray(rightArr.stream().mapToInt(Integer::intValue).toArray());

        // Ghép lại: left + pivot + right
        return IntStream.concat(
                        IntStream.concat(Arrays.stream(sortedLeft), IntStream.of(center)),
                        Arrays.stream(sortedRight))
                .toArray();
    }
}