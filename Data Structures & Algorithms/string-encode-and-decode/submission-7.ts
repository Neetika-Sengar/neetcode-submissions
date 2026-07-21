class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedStr = ''
       
       for(let i =0; i<strs.length; i++){
        encodedStr = encodedStr + strs[i].length + "#" + strs[i] 
       }
       
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0 
        const decoded = []
        while (i < str.length ){
            let j = i
            while(str[j]!=='#'){
                j++
            }
            let length = Number(str.slice(i,j))
            
            j++
            decoded.push(str.slice(j, j+length))
            i = j + length
        }       
              
        return decoded
    }
}
