/*
8-2.재귀함수를 이용한 이진수 출력
10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 
단 재귀함수를 이용 해서 출력해야 합니다.
▣ 입력설명
첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.
▣ 출력설명
첫 번째 줄에 이진수를 출력하세요.
▣ 입력예제
 11
▣ 출력예제 
 1011
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
