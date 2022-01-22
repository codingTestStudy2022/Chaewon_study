/*2.팰린드롬
앞에서 읽을때와 뒤에서 읽을때가 같은 문자열을 팰린드롬이라고 합니다. 
문자열이 입력되면 해당 문자열이 팰린드롬이면 Yes,아니면 No를 출력하는 프로그램을 작성하세요.
단, 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
*/

/*내 풀이:
1)문자열을 소문자 혹은 대문자로 바꾼다음 replace(정규식)을 이용해 알파벳이 아닌 문자를 제거한다.
    1-1)[a-z]혹은 [A-Z]하면 소문자/대문자만 선택되고, ^기호는 not의 의미이다. => /[^a-z]는 a부터 z에 속하지 않는 것을 선택하겠다는 의미
    1-2)/g는 선택자.global => 해당되는 것을 모두 찾겠다는 뜻. 사용하지 않으면 하나만 찾음.
    1-3)i를 함께 쓰기도 하는데 i는 대소문자 구분을 하지 않겠다는 뜻. 만약 /[^a-z]/gi 이렇게 쓰면 대소문자 구별 안하고 모든 문자들이 출력됨.    
2)문자만 남은 문자열을 반전시킨다. => 이 때 join의 파라미터로 공백 설정을 해주어야 문자열이 모두 연결됨. join()의 기본 구분자는 ,라서 ()으로 두면 ,로 구분된 문자열이 나타남.
3)string과 reverse가 같은지 확인해서 같다면 answer를 YES로, 아니면 NO로 만든다.
*/
function solution(string){
    string = string.toLowerCase().replace(/[^a-z]/g,'');
    reverse = string.split('').reverse().join('')
    console.log(string,reverse);
    let answer = (string === reverse) ? 'YES' : 'NO'
    return answer
}

let string = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(string))
