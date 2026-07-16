class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        const sortFn =(str:string)=> JSON.stringify(str.trim().split('').sort((a,b)=> a.localeCompare(b)))
        const sortedS = sortFn(s)
        const sortedT = sortFn(t)

        return sortedS === sortedT

    }
}
