class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        console.log(heights)
        
        let l = 0
        let r = heights.length -1
        let answer = 0

        while (l<r){
            const h1 = heights[l]
            const h2 = heights[r]
            const height = Math.min(h1, h2)
            const width = r-l
            answer = Math.max(answer, height*width)

            if(h1===h2){
                l++
            } else if (h1<h2){
                l++
            } else {
                r--
            }

        }

        return answer
    }
}
