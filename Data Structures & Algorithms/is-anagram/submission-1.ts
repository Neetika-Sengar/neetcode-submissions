class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const mapS = new Map<string, number>()
        const mapT = new Map<string, number>()


        if(s.length !== t.length){
            return false
        }
        
        for (let i=0; i<s.length; i++){
            mapS.set(s[i], (mapS.get(s[i])??0)+1)
            mapT.set(t[i], (mapT.get(t[i])??0)+1)
        }


        const areMapsEqual = (firstMap:Map<string,number>, secondMap:Map<string,number>) =>{
            if(firstMap.size!==secondMap.size){
                return false
            }
            for(const [key,value] of firstMap){
                if(!secondMap.get(key)|| secondMap.get(key)!==value){
                    return false
                }
            }
            return true
        }

        return areMapsEqual(mapS, mapT)
    }
}
