// 8-9.동전교환

function solution(arr,m){
    let answer = Number.MAX_SAFE_INTEGER
    let n = arr.length
  
    function DFS(L,sum){
        //엣지 커팅
        if(sum > m) return; //초과 케이스 제거
        if(L>=answer) return; //이미 구한 answer보다 큰 케이스 제거
        //노드 탐색
        if(sum === m){
            console.log(L,sum)
            answer = Math.min(answer,L)
        }else {
            for(let i=0;i<n;i++){
                DFS(L+1,sum+arr[i])
            }
        }
    }
    DFS(0,0)
    return answer;
}
 
let coin = [1,2,5]
let m = 15
console.log(solution(coin,m))