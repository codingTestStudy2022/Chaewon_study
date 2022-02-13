/*6-7.교육과정 설계

내 풀이:
필수과목 queue를 생성(배열)
교육과정을 돌면서 queue에 해당 요소가 있으면 필수과목, shift()
만약 근데 shift한 요소랑 x가 다르거나 shift를 했는데 큐가 남아있으면 answer는 no가 된다.
*/

function solution(need,plan){
    let answer = 'YES';
    let queue = need.split('')
    
    for(let x of plan){
        if(queue.includes(x)){
            //필수과목
            if(queue.shift() !== x) answer = 'NO'
        }

    }
    if(queue.lentgh>0) answer = "NO"
    return answer
}

let need = 'CBA'
let plan = 'CADBGE'
console.log(solution(need,plan))