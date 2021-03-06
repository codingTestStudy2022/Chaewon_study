/*6-1.괄호 문자 제거(스택)

내 풀이:
문자열을 순회하면서 닫는 괄호를 만나면, 계속 Pop을 한다.
여는 괄호를 만나면 멈추고 다시 순회한다.*/

function solution(s){
    let answer = '';
    let stack = []

    for(let x of s){
        if(x === ')'){
            while(stack.pop()!=='('); 
            //이렇게 하면 pop한 요소가 무엇인지 판단하는 조건으로 주면서 pop을 할 수 있음. 
        }else{
            stack.push(x);
        }
    }
    answer = stack.join('')
    return answer;
}

//'NO'
let arr='(A(BC)D)EF(G(H)(IJ)K)LM(N)'
console.log(solution(arr))

