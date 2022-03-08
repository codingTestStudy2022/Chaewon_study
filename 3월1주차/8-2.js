/*
8-2.재귀함수를 이용한 이진수 출력
 */

function solution(num){
    let answer = ''
    function DFS(n){
        //초보자는 if-else로 재귀를 구현하길 추천!
        //if에 재귀가 멈춰야 할 시점을 조건으로 준다.
        if(n===0) return;
        else {
            DFS(Math.floor(n/2))
            //스택의 상단부터 처리(역순출력)
            answer+=String(n%2)
        }
    }
    DFS(num)
    return answer
}

let num = 11
console.log(solution(num))
