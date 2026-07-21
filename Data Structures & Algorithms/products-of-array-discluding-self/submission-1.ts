class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let answer = []
        
        for(let i = 0; i<nums.length; i++){
            let numsCopy = [...nums]
            numsCopy.splice(i,1,1)
            
            const product =  numsCopy.reduce((item, total=1)=> item*total)
            answer.push(product)
        }
        
        return answer
    }
}
