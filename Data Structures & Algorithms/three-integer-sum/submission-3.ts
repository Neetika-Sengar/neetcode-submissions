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
            if(nums[i]==nums[i-1]){continue}
            
            let l = i+1; 
            let r = n - 1

            while (l<r){
                const sum =nums[i] + nums[l] + nums[r]
                if(sum === 0){
                    result.push([nums[i], nums[l], nums[r]])
                    l++
                    r--
                    while(l<r && nums[l]===nums[l-1]){
                        l++
                    }
                } else if ( sum < 0){
                    l++
                } else {
                    r--
                }
            }
        }
        return result
    }
}
