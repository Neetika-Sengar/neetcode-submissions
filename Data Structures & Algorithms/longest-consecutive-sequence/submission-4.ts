class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)
        let res = 0

        for(let num of nums){
            let count = 0
            let curr = num

            while(set.has(curr)){
                count++
                curr++
            }
            res = Math.max(res, count)
        }

        return res

    }
}
