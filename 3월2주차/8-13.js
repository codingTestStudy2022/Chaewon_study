//8-13.수열 추측하기
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

console.log(solution(33,19))