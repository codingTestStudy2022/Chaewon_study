/*5-8.모든 아나그램 찾기(해쉬&슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분 문자열의 개수를 구하는 프로그램을 작성하세요.
아나그램 판별시 대소문자가 구분됩니다.

[입력설명]
첫 줄에 첫번째 S문자열이 입력되고, 두번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

ex)
bacaAacba
abc

[출력설명]
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

ex)
3
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

