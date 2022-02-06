/*5-7.아나그램(해쉬)
아나그램이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
아나그램 판별 시 대소문자가 구별됩니다.
[입력설명]
첫 줄에는 첫번째 단어가 입력되고
두번째 줄에 두번째 단어가 입력됩니다.

ex)
AbaAeCe
baAACee

[출력설명]
두 단어가 아나그램이면 YES를 출력하고 아니면 NO를 출력합니다.
ex)
YES
*/

/*내 풀이:
각각 문자열에 해당하는 Map 객체를 생성한다.
둘 중 하나의 Map을 돌면서 비교하고, 만약 key와 value가 일치한다면 answer는 YES,그러나 하나라도 안 일치하면 'NO'로 바꾸고 반복을 중단한다.
 */
function solution(str1,str2){
    let answer = 'NO';
    let sH1 = new Map();
    let sH2 = new Map();

    for(let x of str1){
        if(sH1.has(x)){
            //x라는 key가 존재한다면
            sH1.set(x,sH1.get(x)+1) //기존 값을 get하고 +1한다.
        }else{
            sH1.set(x,1); //존재하지 않는다면 새로 값을 만든다.
        }
    }
    for(let x of str2){
        if(sH2.has(x)){
            //x라는 key가 존재한다면
            sH2.set(x,sH2.get(x)+1) //기존 값을 get하고 +1한다.
        }else{
            sH2.set(x,1); //존재하지 않는다면 새로 값을 만든다.
        }
    }
    
    for(let [key,val] of sH1){
        //이렇게 하면 key는 key에 대응하고, value는 val에 대응하게 됨.
        console.log(val,sH2.get(key))
        if(val == sH2.get(key)){
            answer = 'YES'
        }else{
            answer = 'NO'
            break;
        }
    }
    return answer;
}

let str1 = 'AbaAeCe'
let str2 = 'baAACeC'
console.log(solution2(str1,str2))

/* 다른 풀이:
문자열 하나를 가지고 맵 객체를 만들고, 다른 문자열을 순회하면서 key로 사용해 만든 맵의 value를 상쇄시키는 방식.
만약 계속 상쇄시켜서 모두 0이 되면 아나그램이고, 0이 아닌 숫자가 하나라도 있거나 하나라도 음수가 되면 아나그램이 아니다.
 */

function solution2(str1,str2){
    let answer = 'YES'
    let sH = new Map()
    for(let x of str1){
        if(sH.has(x)) sH.set(x,sH.get(x)+1);
        else sH.set(x,1)
    }

    for(let x of str2){
        if(!sH.has(x) || sH.get(x)===0) return "NO" //x를 가지고 있지 않거나, 아직 순회중인데 이미 0이라면 아나그램이 아닌 것.
        sH.set(x,sH.get(x)-1); //계속 상쇄

    }
    return answer;
}