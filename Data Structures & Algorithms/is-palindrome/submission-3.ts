class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newStr = ''

        for( let char of s ){
            if(this.isAlphanumeric(char)){
                newStr = newStr + char.toLowerCase()
            }
        }

        return newStr === newStr.split('').reverse().join('')
    }

    public isAlphanumeric(c:string) :boolean {
            return( (c>= 'a') && (c<= 'z') || (c>= 'A') && (c<= 'Z') || (c>= '0') && (c<= '9'))
        }
}
