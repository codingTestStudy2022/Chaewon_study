/*6-6.공주 구하기

내 풀이+해설 보완:
완전한 괄호만 모두 빼면 남은 괄호들이 조각의 개수가 됨.
⭕️여는 괄호 '('는 무조건 스택에 push한다.
⭕️닫는 괄호를 만났을 때, 만약 직전에 위치한 괄호가 여는 괄호면 레이저이므로 pop을 하고 push는 하지않는다. ✅보완: 이전까지 스택에 있는 여는 괄호의 개수를 answer에 누적한다.
❌아닌 경우는 그냥 push한다. !!=> ⭕️아닌 경우는 어쨌든 막대기의 끝조각이므로 pop()하고 +1을 해야함.
*/

function solution(n,k){
    let answer = 0;
    let queue = Array.from(new Array(n),(x,i)=>i+1)
    
    while(queue.length>1){
        for(let i=0;i<queue.length;i++){
            if(i+1===k){
                queue.splice(i,1)
                break;
            }
        }
        console.log(queue.length)
    }
    answer = queue[0]
    return answer
}


console.log(solution2(8,3))

function solution2(n,k){
    let answer = 0;
    let queue = Array.from({length:n},(v,i)=>i+1) //이런 방법도 있다~
    
    while(queue.length){
        for(let i=1;i<k;i++){
            queue.push(queue.shift()); //뒤로 보냄.
        }
        queue.shift();
        if(queue.length === 1){
            answer = queue.shift();
        }
    }
    return answer
}