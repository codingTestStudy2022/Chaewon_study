// 8-9.동전교환

function solution(coin,m){
    let answer = 0
    let n = coin.length
  
    function DFS(L){
        if(L === m){
            answer++
        }else {
            
        }
    }
    DFS(0)
    return answer;
}

let coin = [1,2,5]
let m = 15
console.log(solution(coin,m))