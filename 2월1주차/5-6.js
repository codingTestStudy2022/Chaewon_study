/*5-6.학급 회장(해쉬)
학급 회장을 뽑는데 후보로 기호 A,B,C,D,E 후보가 등록을 했습니다.
투표 용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)이 쓰여져 있으며
선생님은 기호를 발표하고 있습니다. 
선생님의 발표가 끝난 후 어떤 기호의 후보가 회장이 되었는지 출력하는 프로그램을 작성하세요. 
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.

[입력설명]
첫 줄에는 반 학생수 N이 주어집니다.
두번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.

ex)
15
BACBACCACCBDEDE

[출력설명]
학급 회장으로 선택된 기호를 출력합니다.
ex)
C
*/

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
