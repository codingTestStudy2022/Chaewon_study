/*
7-5.Least Recently Used(카카오 캐시 문제 변형)

 */

function solution(s,n,task){
    let cache = []; //캐시메모리

    for(let i=0;i<n;i++){
        if(cache.includes(task[i])){
            //만약 이미 캐시에 있는 작업이라면 해당 작업의 위치가 캐시 어디에 있는지 확인하고, 임시변수로 저장.
            //선택 정렬로 캐시 맨 앞으로 옮긴다.
            let index = cache.indexOf(task[i])
            let tmp = cache[index]

            for(let j=index-1;j>=0;j--){
                cache[j+1] = cache[j]
            }

            cache[0] = tmp
        }else{
            //그 외에는 캐시메모리의 맨 앞에 작업을 삽입
            cache.unshift(task[i])
            if(cache.length>s) cache.pop()
        }
        
    }

    return cache;
}
let s = 5
let n = 14
let task = [1,4,3,2,6,5,3,8,7,10,11,9,20,9]
console.log(solution(s,n,task))

function solution2(s,n,task){
    let cache = Array.from({length:s},()=>0); //캐시메모리

    task.forEach(x => {
        let pos = -1;
        for(let i=0;i<s;i++){
            if(cache.includes(x)) pos = i //cache hit
            if(pos === -1){
                //cache miss
                for(let i=s-1;i>1;i--){
                    cache[i] = cache[i-1]
                }
                cache[0] = x
            }else{
                //cache hit
                for(let i=pos;i>=1;i--){
                    cache[i] = cache[i-1];
                }
                cache[0] = x
            }
        }
    });

    return cache;
}