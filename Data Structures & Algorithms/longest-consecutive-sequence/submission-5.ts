class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)
        let res = 0

        for(let i = 0; i< nums.length; i++){
            let count = 0
            let curr = nums[i]

            while(set.has(curr)){
                count++
                curr++
            }
            res = Math.max(res, count)
        }

        return res

    }
}
