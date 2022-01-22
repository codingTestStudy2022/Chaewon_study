/*1.회문 문자열
앞에서 읽을때와 뒤에서 읽을때가 같은 문자열을 회문 문자열이라고 합니다. 
문자열이 입력되면 해당 문자열이 회문문자열이면 Yes,아니면 No를 출력하는 프로그램을 작성하세요.
대소문자를 구분하지 않습니다.
*/

/*내 풀이:
1)문자열을 먼저 split으로 배열로 만든 후 reverse로 반전시킨 다음 join으로 다시 문자열로 만듬.
2)1단계에서 만든 반전 문자열을 원본 문자열과 비교.localeCompare()를 사용했고 맞으면 1을 반환.
3)1이 반환되면 YES 출력.아니면 NO 출력
*/
function solution(string){
    let answer='';
    let reverse = string.split('').reverse().join()
    answer = (string.localeCompare(reverse)) ? 'YES' : 'NO'
    return answer
}

let string = 'gooGt'
console.log(solution2(string))

/*내 풀이2:
1)문자열을 먼저 split으로 배열로 만든 후 reverse로 반전시킨 다음 join으로 다시 문자열로 만듬.
2)원본 문자열과 반전 문자열을 모두 대문자로 변환시켜 두 문자열이 동일한지 비교.
3)맞으면 YES 출력.아니면 NO 출력
*/
function solution2(string){
    let answer='';
    let reverse = string.split('').reverse().join()
    answer = (string.toUpperCase() === reverse.toUpperCase()) ? 'YES' : 'NO'
    return answer
}

/*강의 풀이 1
for문 돌면서 차례로 양끝의 문자가 같은지 점점 안쪽으로 오면서 검사하는 방식.
글자수의 절반 위치까지 돌면 됨.
*/
function solution3(string){
    let answer='YES';
    string = string.toLowerCase();
    let len =  string.length;
    for(let i=0;i<Math.floor(len/2);i++){
        if(string[i]!==string[len-i-1]) return "NO"
    }
    return answer
}
