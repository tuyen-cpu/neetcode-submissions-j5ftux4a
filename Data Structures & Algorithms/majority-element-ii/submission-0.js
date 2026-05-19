class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const re=[]
        const map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1)
        }
        let k = Math.floor(nums.length/3);
        for(let key of map.keys()){
            if(map.get(key)>k) re.push(key)
        }
        return re
    }
}
