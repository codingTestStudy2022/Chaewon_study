/*
11.대문자 찾기
한 개의 문자열을 입력받고, 입력받은 문자열에 알파벳 대문자가 몇 개 있는지 알아내기

[입력 설명]
첫번째 줄에 문자열 입력
[출력 설명]
대문자 개수 출력
*/

// 내 풀이:문자열 순회하면서 주어진 단어를 대문자화 시킨것이 주어진 단어와 같으면 이미 대문자인거니까 answer의 값을 +1 시킴
function solution(string){
    let answer = 0; //answer초기화
    for(str of string){
        if(str === str.toUpperCase()){
            answer++;
        }
    }
    return answer
}

console.log(solution('ComputerProgrammingIsHard'))

// 방법2: 아스키코드를 이용해서 대문자에 속하는지 판단하는 방식
// 대문자: 65~90, 소문자: 97~122
function solution2(string){
    let answer = 0; //answer초기화
    for(str of string){
        let num = x.charCodeAt(); //아스키코드 값 반환
        if(num>=65 && num<= 90) answer++; //대문자 범위에 해당하면 +1
    }
    return answer
}