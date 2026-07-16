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

        const hashMap = new Map<string, number>()
        
        for (let i=0; i<s.length; i++){
            hashMap.set(s[i], (hashMap.get(s[i])??0)+1)
            hashMap.set(t[i], (hashMap.get(t[i])??0)-1)
        }

        const isMapEmpty = (fmap:Map<string,number>) =>{
            for(const [_,value] of fmap){
                if(value!==0){
                    return false
                }
            }
            return true
        }

        return isMapEmpty(hashMap)
    }
}
