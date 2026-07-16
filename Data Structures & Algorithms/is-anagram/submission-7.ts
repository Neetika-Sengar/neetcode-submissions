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

        const mapS = new Map<string, number>()
        const mapT = new Map<string, number>()
        
        for (let i=0; i<s.length; i++){
            mapS.set(s[i], (mapS.get(s[i])??0)+1)
            mapS.set(t[i], (mapS.get(t[i])??0)-1)
        }

        const areMapsEqual = (firstMap:Map<string,number>, secondMap:Map<string,number>) =>{
            
            for(const [_,value] of firstMap){
                if(value!==0){
                    return false
                }
            }
            return true
        }

        return areMapsEqual(mapS, mapT)
    }
}
