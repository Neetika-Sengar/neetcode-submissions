class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet = new Set()
        for (let item of nums){
            if(numsSet.has(item)){
                return true
            }
            numsSet.add(item)
        }
        return false
    }
}
