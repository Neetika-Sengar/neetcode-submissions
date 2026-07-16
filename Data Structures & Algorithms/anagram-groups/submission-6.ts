class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map<string,string[]>

        for (let item of strs) {
            const sortKey = new Array(26).fill(0)           

            for (let i=0; i<item.length; i++){
                const j = item.charCodeAt(i)-'a'.charCodeAt(0)
                sortKey[j] =  sortKey[j] + 1
            }
          const sortedKey = sortKey.join('#')

            if(hashMap.has(sortedKey)){
                hashMap.get(sortedKey)?.push(item)
            } 
            else {
                hashMap.set(sortedKey,[item])
            }
        }
        
        return Array.from(hashMap.values())
    }
}
