class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        let a = map.get(0) - 1;
        let b = map.get(1) + a;
        let c = map.get(2) + a + b;

        for (let i = 0; i < nums.length; i++) {
            if (i <= a) nums[i] = 0;
            if (i > a && i <= b) nums[i] = 1;
            if (i > b && i <= c) nums[i] = 2;
        }

        return nums;
    }
}
