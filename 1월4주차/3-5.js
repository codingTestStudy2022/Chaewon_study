/*5.문자열 압축
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 
반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
단 반복횟수가 1인 경우 생략합니다.

[입력 예제]
KKHSSSSE
[출력 예제]
K2HS4E
*/

/*내 풀이:
1)앤써는 빈 문자열,카운터 변수는 1로 초기화한다
2)문자열을 순회한다
    ->if (현재 문자 == 그 다음 문자) => 카운터++, 
    ->else => if 카운터>1 이면 answer += 현재 문자 + 카운터, else answer+=현재문자
        카운터 = 1로 다시 초기화
*/
function solution(s){
    s += '' //풀이 보완: 마지막 문자 비교 시 인덱스 오류방지를 위해 공란을 추가한다.
    let answer = ''
    let count = 1
    for(let i=0;i<s.length;i++){
        if(s[i]===s[i+1]){
            count++
        }else{
            //풀이 보완:answer에 일단 문자는 추가하고,
            //카운터가 1보다 큰 경우에만 문자화 시킨 count를 함께 추가해준다.
            answer += s[i]
            if(count > 1) answer += String(count)
            count = 1
        }
    }
    return answer
}

let s = 'KKHSSSSSSE'
console.log(solution(s))
