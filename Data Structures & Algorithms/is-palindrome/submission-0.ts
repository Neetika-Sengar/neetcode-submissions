class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i = 0;
        const noSpecialChars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const n = noSpecialChars.length -1
        while(i<n){
            if(noSpecialChars[i]!==noSpecialChars[n-i]){
                return false
            } 
            i++
        }
        return true
    }
}
