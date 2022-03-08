/* 8-1.재귀 함수
*/

function solution(num){
    let answer = [];
    for(let i=1;i<=num;i++){
        answer.push(i)
    }
    return answer;
}
console.log(solution2(3));

/*
재귀 함수란?(+스택프레임)
자기가 자기 자신을 호출하는 것이 재귀 함수이다.
 */

function solution2(n){
    function DFS(L){
        if(L==0) return;//종료
        else{
            DFS(L-1)
            /*위로 올렸는데 출력 순서가 바뀌는 이유:
            console.log(L)을 실행하기 전 대기 상태로 변경되고 DFS()함수로 넘어간다. 계속 DFS로 넘어가고 넘어가면 0까지 가고,그제서야 종료한 다음 순차적으로 1출력,2출력,3출력...으로 진행된다. 
            - 스택 프레임 -
            함수는 스택에 들어감.재귀 함수도 함수니까 스택에 들어감.이를 스택 프레임이라고 한다.
            [(함수 정보-매개변수,지역변수,복귀주소..),(함수정보),(함수정보)...]
            함수가 return을 하는 순간 스택 프레임에서는 pop이 일어난다. 함수가 스택에서 사라지고 해당 함수의 복귀 주소로 넘어간다.(DFS(1)이 끝나면 DFS(2)자리로 복귀한다.)
            */
            console.log(L)
        }
        //DFS(3)->DFS(2)->DFS(1)->return->console.log(1)->console.log(2)->console.log(3)
    }
    DFS(n)
}