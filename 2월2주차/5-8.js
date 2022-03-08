/*5-8.모든 아나그램 찾기(해쉬&슬라이딩 윈도우)
*/

function compareMaps(map1,map2){
    if(map1.size !== map2.size) return false

    for(let [key,value] of map1){
        if(!map2.has(key) || map2.get(key) !== value) return false
    }

    return true
}
function solution(s,t){
    let answer = 0;
    let tH = new Map();
    let sH = new Map();

    //t Map 세팅
    for(let x of t){
        if(tH.has(x)) tH.set(x,tH.get(x)+1)
        else tH.set(x,1)
    }

    //s맵 초기 길이 세팅
    let len = t.length-1;
    for(let i=0;i<len;i++){
        if(sH.has(s[i])) sH.set(s[i],sH.get(s[i])+1)
        else sH.set(s[i],1)
    }
    
    //슬라이딩 윈도우
    let lt = 0;
    for(let rt=len; rt<s.length;rt++){
        //맵에 추가하고
        if(sH.has(s[rt])) sH.set(s[rt],sH.get(s[rt])+1)
        else sH.set(s[rt],1)
        //비교, 같으면 answer 증가
        if(compareMaps(sH,tH)){
            console.log('compare')
            answer++
        }
        //lt 위치의 값 줄이기(윈도우 밀기)
        sH.set(s[lt],sH.get(s[lt])-1)
        //0이면 key값 삭제
        if(sH.get(s[lt])===0) sH.delete(s[lt])
        lt++
    }

    return answer;
}

let str1 = 'bbacaAacbab'
let str2 = 'abbc'
console.log(solution(str1,str2))

