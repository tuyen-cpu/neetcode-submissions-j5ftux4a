class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const red = [];
        const white = [];
        const blue = [];
        let num;
        for (let i = 0; i < nums.length; i++) {
            num = nums[i];
            if (num === 0) red.push(num);
            if (num === 1) white.push(num);
            if (num === 2) blue.push(num);
        }
        const t = [...red, ...white, ...blue];
        for(let i=0;i<t.length;i++ ){
            nums[i]=t[i]
        }

        return nums;
    }
}
