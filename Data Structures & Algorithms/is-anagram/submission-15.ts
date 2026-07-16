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

        const charArray = new Array(26).fill(0)
        const CHAR_OFFSET = 97
        for (let i = 0; i<s.length; i++){
           charArray[s.charCodeAt(i) - CHAR_OFFSET] = (charArray[s.charCodeAt(i) - CHAR_OFFSET])+1
           charArray[t.charCodeAt(i) - CHAR_OFFSET] = (charArray[t.charCodeAt(i) - CHAR_OFFSET])-1
        }
        
    return charArray.every((item)=> item === 0)
    }
}
