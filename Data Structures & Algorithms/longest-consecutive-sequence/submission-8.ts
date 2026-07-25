class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums.sort((a,b)=> a-b))
        let res = 0
        console.log(set)
        for(let i = 0; i< nums.length; i++){
            let count = 0
            let curr = nums[i]

            while(set.has(curr)){
                count++
                curr++
            }
            i = i + count -1
            res = Math.max(res, count)
        }

        return res

    }
}
