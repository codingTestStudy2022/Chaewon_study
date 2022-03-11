//8-12.조합수(메모이제이션)
function solution(n,r){
    //일반 조합수 구하기
    let answer;
    function DFS(n,r){
        if(n===r || r===0) return 1;
        else return DFS(n-1,r-1)+DFS(n-1,r);
    }
    answer = DFS(n,r)
    return answer
}

console.log(solution2(33,19))

function solution2(n,r){
    //메모이제이션
    let answer;
    let dy = Array.from(Array(35),()=>Array(5).fill(0))

    function DFS(n,r){
        if(dy[n][r]>0) return dy[n][r]
        if(n===r || r===0) return 1;
        else return dy[n][r]=DFS(n-1,r-1)+DFS(n-1,r);
    }
    answer = DFS(n,r)
    return answer
}