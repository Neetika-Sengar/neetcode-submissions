class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let item of nums){
            const i = nums.indexOf(item)
            const j = nums.indexOf(target-item)

            if(i == -1 || j == -1){
                continue;
            }

            if(i !== j){
                return [i, j]
            }
            const secondOccurence = nums.indexOf(item, i+1)
            if(secondOccurence == -1){continue}
            return [i, secondOccurence]
        }
    }
}
