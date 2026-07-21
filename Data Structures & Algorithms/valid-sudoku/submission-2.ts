class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const n = board[0].length
        for(let i=0; i<n; i++ ){
            const rowsSet = new Set()
            const colsSet = new Set()
            for(let j = 0; j<n; j++){
                const num1 = board[i][j]
                const num2 = board[j][i]
                if(num1 !== "." ){
                    if(!rowsSet.has(num1)){
                        rowsSet.add(num1)
                    } else {
                        return false
                    }
                }

                if(num2!=='.'){
                    if(!colsSet.has(num2)){
                        colsSet.add(num2)
                    } else {
                        return false
                    }
                }
            }
        }

        const hashMap = new Map<string, Set<string>>
        for(let i=0; i<n; i++){
            for(let j = 0; j<n; j++){
                const num = board[i][j]
                if(num !== "."){
                    const key = `${Math.floor(i/3)}-${Math.floor(j/3)}`
                    if(!hashMap.get(key)){
                        hashMap.set(key, new Set())
                    }
                    if(!hashMap.get(key).has(num)){
                        hashMap.get(key).add(num)
                    } else {
                        return false
                    }
                }                
            }
        }
        console.log(hashMap)

        return true
    }
}
