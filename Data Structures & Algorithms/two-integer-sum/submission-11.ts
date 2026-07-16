class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let item of nums){
            const index1 = nums.indexOf(item)
            const index2 = nums.indexOf(target-item)

            if(index1 == -1 || index2 == -1){
                continue;
            }

            if(item !== target-item){
                return [index1, index2]
            }
            const secondOccurence = nums.indexOf(item, index1+1)
            if(secondOccurence == -1){continue}
            return [index1, nums.indexOf(item, index1+1)]
        }
    }
}
