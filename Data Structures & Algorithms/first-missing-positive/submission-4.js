class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const map = new Map();
        let max = 0;
        for (let num of nums) {
            if (num > max) max = num;
            map.set(num, 1);
        }

        if (max === 1) return max+1;
        for (let i = 1; i < max; i++) {
            if ((map.get(i) || 0) === 0) return i;
        }

        return max + 1;
    }
}
