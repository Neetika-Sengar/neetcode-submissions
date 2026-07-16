class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hashMap = new Map<string,string[]>

        for (let item of strs) {
            const sortedKey = item.split('').sort().join('')

            if(hashMap.has(sortedKey)){
                hashMap.set(sortedKey, [... hashMap.get(sortedKey), item])
            } 
            else {
                hashMap.set(sortedKey,[item])
            }
        }
        
        return Array.from(hashMap.values())
    }
}
