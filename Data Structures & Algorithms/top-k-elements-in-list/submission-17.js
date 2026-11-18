class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(let n of nums){
            map.set(n,(map.get(n)||0)+1);
        }

        const buckets = new Array(nums.length + 1);
        for(const [num,freq] of map){
            if(!buckets[freq]) buckets[freq]=[]
            buckets[freq].push(num)
        }
        const res= []
        let index=0
        for(let i = buckets.length-1;i>=0;i--){
            let bucket = buckets[i];
            if(!bucket) continue;
            for(let n of bucket){
                res.push(n)
                if(res.length===k) return res;
            }
        }
return res
        
    }
}
