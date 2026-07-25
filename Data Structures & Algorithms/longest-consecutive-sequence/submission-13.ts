class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums)
        let longest = 0
        for(let item of numSet){
            if(!numSet.has(item-1)){
                let length = 1
                while(numSet.has(item+length)){
                    length++
                }
                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
