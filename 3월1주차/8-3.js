/* 8-3.이진트리 순회 
아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.

전위순회 출력 : 1 2 4 5 3 6 7 
중위순회 출력 : 4 2 5 1 6 3 7 
후위순회 출력 : 4 5 2 6 7 3 1
*/

function solution(v){
    let answer;
    function DFS(v){
        if(v>7){
            return;
        }else {
            //console.log(v) 전위
            DFS(v*2)//왼쪽
            //console.log(v) 중위
            DFS(v*2+1)//오른쪽
            console.log(v)//후위
        }
    }
    DFS(v)
    return answer
}

let num = 1
console.log(solution(num))
