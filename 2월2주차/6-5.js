/*6-5.쇠막대기

내 풀이+해설 보완:
완전한 괄호만 모두 빼면 남은 괄호들이 조각의 개수가 됨.
⭕️여는 괄호 '('는 무조건 스택에 push한다.
⭕️닫는 괄호를 만났을 때, 만약 직전에 위치한 괄호가 여는 괄호면 레이저이므로 pop을 하고 push는 하지않는다. ✅보완: 이전까지 스택에 있는 여는 괄호의 개수를 answer에 누적한다.
❌아닌 경우는 그냥 push한다. !!=> ⭕️아닌 경우는 어쨌든 막대기의 끝조각이므로 pop()하고 +1을 해야함.
*/

function solution(s){
    let answer = 0;
    let stack = []

    for(let i=0;i<s.length;i++ ){
        if(s[i]==='(') stack.push(s[i])
        else{
            if(s[i-1] === "("){
                stack.pop()
                answer += stack.length
            }else{
                stack.pop()
                answer += 1
            }
        }
    }
    return answer
}

let s = '()(((()())(())()))(())'
console.log(solution(s))
