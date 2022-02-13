/*6-6.공주 구하기

내 풀이+해설 보완:
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