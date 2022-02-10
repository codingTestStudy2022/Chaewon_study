/*6-3.크레인 인형뽑기(카카오)
게임개발자인 죠르디는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.
죠르디는 게임의 재미를 높이기 위해 화면 구성과 규칙을 다음과 같이 게임 로직에 반영하려고 합니다.

https://programmers.co.kr/learn/courses/30/lessons/64061

내 풀이:
move순서대로 크레인을 작동시켜, board의 행을 순회하면서 인형을 뽑아 stack에 push한다.
이 때 stack에 저장되는 아이템을 카운트한다. 카운트에서 같은 인형이면 ++하고, 아니면 1로 초기화한다.
만약 카운트가 3이면 현재 아이템을 모두 pop한다.

문제 잘못봐서 3개쌓이면 터트리는줄 ㅋ ㅋㅋ 쿠
*/

function solution(board,moves){
    let answer = 0;
    let stack = []

    for(let i of moves){
        for(let j=0;j<board.length;j++){
            if(board[j][i-1] !== 0){
                let tmp = board[j][i-1]
                board[j][i-1] = 0
                if(stack[stack.length-1] === tmp){
                    stack.pop()
                    answer += 2
                }else{
                    stack.push(tmp)
                }
                break;
            }
        }
    }
    return answer
}

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]]
let moves=[1,5,3,5,1,2,1,4]
console.log(solution(board,moves))

function solution2(board,moves){
    let answer = 0
    let stack = []
    moves.forEach(pos => {
        for(let i=0;i<board.length;i++){
            if(board[i][pos-1] !== 0){
                //인형을 만났다, 꺼내고 해당 위치는 0으로 만든다.
                let tmp = board[i][pos-1];
                board[i][pos-1] = 0
                if(tmp === stack[stack.length-1]){
                    //만약 스택의 마지막 인형과 같은 인형이라면
                    stack.pop();
                    answer += 2 //맨 끝 인형이랑 이번에 들어가려던 인형이 터진거임
                }else stack.push(tmp)

                break; //하나 만났으면 for문을 종료해야함.
            }
        }
    }); 
    return answer
}
