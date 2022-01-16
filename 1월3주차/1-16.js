/*
16.중복 문자 제거
소문자로 된 단어(문자열)이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성.

[입력 설명]
문자열 입력

[출력 설명]
중복이 제거된 문자열 출력
*/

/* 
내 풀이:
indexOf()로 특정 문자열을 검색했을 때 검색이 되지 않으면 -1을 리턴한다는 점을 이용.
indexOf()로 문자열을 순회하면서 문자열의 존재여부를 체크하고, 해당 글자가 answer에 없다면 추가한다.
*/

function solution(string){
    let answer = '';
    for (str of string){
        if(answer.indexOf(str) === -1){
            //answer가 str을 가지고 있지 않다면 추가
            answer += str
        }
    }
    return answer
}
console.log(solution3('sstudentss'))

// 풀이2: indexOf()는 첫번째 위치만 반환한다는 특징을 이용,
// for문 돌면서 각 문자열의 인덱스와 indexOf()의 인덱스가 일치하는지 확인하는 방식
function solution2(string){
    let answer = '';
    for (let i=0;i<string.length;i++){
        if(string.indexOf(string[i]) === i){
            //가르키고 있는 string의 indexOf()값이 i와 같은가? 
            //같다면 첫번째 문자이므로 answer에 추가, 같지 않다면 다른곳에 존재하는 중복문자이므로 아무 작업도 하지 않음.
            answer += string[i];
        }
    }
    return answer
}

// + indexOf()를 이용해 특정 문자 개수 찾기
function solution3(string){
    let answer = 0;
    let pos = string.indexOf('t')
    while(pos !== -1){
        //문자가 존재하는 동안 반복
        answer++ //문자 카운팅
        pos = string.indexOf('t',pos+1) 
        //현재 pos 다음부터 t를 탐색하도록 pos+1을 하고 t를 찾으면 pos에 해당 인덱스 저장, 만약 없으면 -1이 저장될 것.
    }
    return answer
}

