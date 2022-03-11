//8-11.팩토리얼
function solution(n){
    let answer;
    function DFS(L,tmp){
        if(L === 0) return;
        else {
            answer = L*tmp
            DFS(L-1,answer)
        }
    }
    DFS(n,1)
    return answer
}

let num = 5
console.log(solution2(num))

//강의 풀이
function solution2(n){
    let answer;
    function DFS(L){
        if(L === 1) return 1;
        else return L*DFS(L-1)
    }
    answer = DFS(n)
    return answer
}

