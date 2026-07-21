class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let kachra = ''
       
       for(let i =0; i<strs.length; i++){
        kachra = kachra + strs[i].length + "#" + strs[i] 
       }
       
        return kachra
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0 
    const answer = []
        while (i < str.length ){
            let j = i
            while(str[j]!=='#'){
                j++
            }
            let length = Number(str.slice(i,j))
            
            j++
            answer.push(str.slice(j, j+length))
            i = j + length
        }       
              
        return answer
    }
}
