function solution(participant, completion) {
    var answer = '';
    var sH = new Map();
    
    for(let x of participant){
        if(sH.has(x)){
            sH.set(x,parseInt(sH.get(x))+1)
        }else{
            sH.set(x,1)
        }
    }

    for(let [key,val] of sH){
        if(completion.includes(key)){
            sH.set(key,sH.get(key)-1)
        }
        if(sH.get(key) > 0){
            answer = key
            break;
        }
    }
    return answer;
}

console.log(solution2(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))

function solution2(participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()
    console.log(participant,completion)
    
    for(let i=0;i<participant.length;i++){
        if(participant[i] !== completion[i]){
            console.log('fail!')
            answer = participant[i]
            break;
        }
    }
    
    return answer;
}