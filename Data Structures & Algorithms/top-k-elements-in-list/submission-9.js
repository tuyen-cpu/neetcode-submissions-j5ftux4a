class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(const num of nums){
            map.set(num,(map.get(num) || 0) + 1)
        }
        console.log(map) 
        const mapSorted = [...map.entries()]
        .sort((a,b)=>b[1]-a[1]).slice(0,k)
        console.log('ss: ',mapSorted)
        const result = mapSorted.map(entry=>entry[0])
        return result
    }
}
