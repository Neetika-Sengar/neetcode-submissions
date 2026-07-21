class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length

        const prefix = []
        const suffix = []
        const res = []

        prefix[0]=1
        suffix[n-1]=1

        for(let i = 1; i< n; i++){
            prefix[i]= nums[i-1]* prefix[i-1]
        }
        
        for(let i = n-2; i>=0; i--){
            suffix[i] = nums[i+1]* suffix[i+1]
        }
        
        for(let i = 0; i<n; i++){
            res.push(prefix[i] * suffix[i])
        }

        return res
    }
}
