/*
13.대소문자 변환
대문자와 소문자가 공존하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하기

[입력 설명]
첫번째 줄에 문자열 입력
[출력 설명]
대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력
*/

console.log(solution('ComputerProgrammingIsHard'))

// 내 풀이:
function solution(string){
    let answer = ''
    for(str of string){
        if(str === str.toUpperCase()){
            //대문자면 소문자로 바꾼 문자를 answer에 삽입
            answer += str.toLowerCase()
        }else{
            //소문자면 대문자로 바꾼 문자 삽입
            answer += str.toUpperCase()
        }
    }
    return answer
}
