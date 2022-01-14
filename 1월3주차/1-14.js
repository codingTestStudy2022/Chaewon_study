/*
14.가장 긴 문자열
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하시오

[입력 설명]
첫 줄에 자연수 N이 주어진다(3<=N<=30)
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
각 문자열의 길이는 서로 다르다.
[출력 설명]
가장 긴 문자열을 출력한다.
*/

let strArray = ['num','number','numbering','numm']
console.log(solution(strArray))
// 내 풀이:
function solution(strings){
    let answer = '';
    for(string of strings){
        if (string.length >= answer.length){
            console.log(string,string.length)
            answer = string;
        }
    }
    return answer
}
