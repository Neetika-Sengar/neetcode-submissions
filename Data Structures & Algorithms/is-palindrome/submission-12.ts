class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const n = s.length
        let l = 0
        let r = n - 1
        
        while (l<r){
            while(l<r && !this.isAlphanumeric(s[l]) ){
                l++
            }
            while(l<r && !this.isAlphanumeric(s[r])&& r>0){
                r--
            }
            
            if(s[l]?.toLowerCase()!==s[r]?.toLowerCase()){
                return false
            }
            l++
            r--
        }
        return true
    }

    isAlphanumeric(s:string):boolean{
        return (
            s>='a' && s<='z' || 
            s>='A' && s<='Z' || 
            s>='0' && s<='9'
        )
    }
}
