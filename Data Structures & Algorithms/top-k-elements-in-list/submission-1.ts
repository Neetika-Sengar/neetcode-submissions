class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap= new Map<number, number>()

        for(let item of nums){
            if(hashMap.get(item)){
                hashMap.set(item, hashMap.get(item)+1)
            } else {           
                hashMap.set(item,1)
                }
        }

        const mostFrequentedElements = ([...hashMap.entries()].sort((a,b)=>b[1] - a[1])).slice(0,k)
        return mostFrequentedElements.map((item)=> item[0])
    }
}
