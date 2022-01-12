/*
12.대문자로 통일
대문자와 소문자가 공존하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하기

[입력 설명]
첫번째 줄에 문자열 입력
[출력 설명]
대문자로 변환한 문자열 출력
*/

console.log(solution3('ComputerProgrammingIsHard'))

// 내 풀이:
function solution(string){
    let answer = string.toUpperCase();
    return answer
}

// 방법2: 문자열 문제 응용을 위해 이런 방식도 알아두기(11번 응용 방식)
function solution2(string){
    let answer = ''; //answer초기화
    for(str of string){
        if(str === str.toLowerCase()){
            answer += str.toUpperCase(); //소문자의 경우는 대문자로 변경하고 문자열 추가
        }else{
            answer += str; //answer에 문자열 추가
        }
    }
    return answer
}

// 방법3:아스키 응용 방식(11번 방식2 응용)
function solution3(string){
    let answer = ''; //answer초기화
    for(str of string){
        num = str.charCodeAt();
        // 대문자: 65~90, 소문자: 97~122, 대문자-소문자 사이 32간격 존재
        if(num>=97 && num<=122){
            answer += String.fromCharCode(num - 32); //아스키코드 넘버에 해당하는 문자열 추가
        }else{
            answer += str; //answer에 문자열 추가
        }
    }
    return answer
}