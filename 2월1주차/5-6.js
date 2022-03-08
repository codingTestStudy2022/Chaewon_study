/*5-6.학급 회장(해쉬)*/

function solution(str){
    let answer = 0;
    let sH = new Map();
    for(let x of str){
        if(sH.has(x)){
            //x라는 key가 존재한다면
            sH.set(x,sH.get(x)+1) //기존 값을 get하고 +1한다.
        }else{
            sH.set(x,1); //존재하지 않는다면 새로 값을 만든다.
        }
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let [key,val] of sH){
        //이렇게 하면 key는 key에 대응하고, value는 val에 대응하게 됨.
        if(val>max){
            max = val; //최대값은 value,
            answer = key; //답은 key
        }
    }
    return answer;
}

let str = 'BACBACCACCBDEDE'
console.log(solution(str))
