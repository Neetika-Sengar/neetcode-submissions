class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i = 0;
        // const noSpecialChars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() disabling because this will increase time complexity
        // instead lets use two pointer and if we encounter a special character, we just move the pointer
        const n = s.length 
        let left = 0
        let right = n -1
        while(left< right){
            while(left < right && !this.isAlphanumeric(s[left])){
                left++
            }
            while(left < right && !this.isAlphanumeric(s[right])){
                right--
            }
            if(s[left].toLowerCase()!==s[right].toLowerCase()){
                console.log(s[left].toLowerCase(),s[right].toLowerCase())
                return false
            }
            left++
            right--
        }
        return true
    }

     public isAlphanumeric(c:string) :boolean {
            return( (c>= 'a') && (c<= 'z') || (c>= 'A') && (c<= 'Z') || (c>= '0') && (c<= '9'))
        }
}
