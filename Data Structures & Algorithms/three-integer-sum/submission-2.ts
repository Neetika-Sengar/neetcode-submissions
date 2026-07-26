class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const n = nums.length
        nums.sort((a,b)=> a - b)
        
        let result = []
        for(let i = 0; i<n; i++){
            let target = 0 - nums[i]
            if(nums[i]==nums[i-1]){continue}
            
            let l = i+1; 
            let r = n - 1

            while (l<r){
                const sum = nums[l] + nums[r]
                if(sum === target){
                    result.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while(l<r && nums[l]===nums[l-1]){
                        l++
                    }
                } else if ( sum < target){
                    l++
                } else {
                    r--
                }
            }
        }
        return result
    }
}
