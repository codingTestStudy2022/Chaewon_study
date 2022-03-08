/*6-1.올바른 괄호(스택)
풀이:여는 괄호면 push, 닫는 괄호면 pop을 한다. 올바른 괄호라면 괄호 순회 후 빈 스택이 남을것이다.
*/

function solution(arr){
    let answer = 'YES';
    let stack = []

    for(let x of arr){
        if(x === '(') stack.push(x)
        else{
            if(stack.length === 0) answer = "NO"
            stack.pop() //pop은 마지막 요소를 제거함.
        }
    }

    if(stack.length > 0) answer='NO'

    return answer;
}

//'NO'
let arr='(()(())'
console.log(solution(arr))

