class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a,b)=> a-b)
        let n = nums.length
        const answer = []
        if(!n)return[]
        
        for(let i = 0; i<n; i++ ){
            if(nums[i]>0)break
            let l = i + 1
            let r = n - 1
            if(nums[i]==nums[i-1])continue
            
            while (l<r){
                const sum = nums[i]+nums[l]+nums[r]
                if(sum===0){
                    answer.push([nums[i],nums[l],nums[r]])
                    l++
                    r--
                    while(l<r && nums[l]==nums[l-1]){
                        l++
                    }
                } else if (sum<0){
                    l++
                } else {r--}
               
                
            }
        }
        return answer
    }
}
