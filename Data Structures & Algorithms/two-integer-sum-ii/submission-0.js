class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();
        for(let i =0; i<numbers.length; i++){
            map.set(numbers[i],i)
        }
        for(let i =0;i<numbers.length;i++){
            let num = numbers[i]
            let temp = target-num

            if(map.has(temp)) return [i+1, map.get(temp)+1]
        }
return []
    }
}
