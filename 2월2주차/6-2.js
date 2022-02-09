/*6-1.괄호 문자 제거(스택)
입력된 문자열에서 소괄호 () 사이에 존재하는 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요

[입력설명]
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
ex)
(A(BC)D)EF(G(H)(IJ)K)LM(N)

[출력설명]
남은 문자만 출력한다
ex)
EFLM

내 풀이:
문자열을 순회하면서 닫는 괄호를 만나면, 계속 Pop을 한다.
여는 괄호를 만나면 멈추고 다시 순회한다.*/

function solution(s){
    let answer = '';
    let stack = []

    for(let x of s){
        if(x !== ')' && x !=='('){
            stack.push(x)
            console.log(stack,'push')
        }else if(x === ')'){
            stack.pop()
            console.log(stack,'pop')
        }
    }

    return answer;
}

//'NO'
let arr='(A(BC)D)EF(G(H)(IJ)K)LM(N)'
console.log(solution(arr))

