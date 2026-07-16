class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false
        }

        const sortFn =(str:string)=> str.trim().split('').sort().join()
        const sortedS = sortFn(s)
        const sortedT = sortFn(t)

        return sortedS === sortedT

    }
}
