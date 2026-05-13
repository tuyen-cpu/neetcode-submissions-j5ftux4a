class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = [...s].filter((e) => /[A-Za-z0-9]/.test(e)).map((e) => e.toUpperCase());
        for (let i = 0; i < arr.length / 2 + 1; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) return false;
        }
        return true;
    }
}
