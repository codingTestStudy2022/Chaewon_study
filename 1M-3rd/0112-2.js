//9.A를 #으로 바꾸어 출력하기
/*
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.

[입력 설명]
첫번째 줄에 문자열이 입력된다.
[출력 설명]
바뀐 단어를 출력한다.
*/

function solution(word){
    let answer=word; //answer를 입력값과 동일하게 만듬
    answer = answer.replaceAll('A','#');

    return answer
}

let word = 'BANANA'
console.log(solution(word))

/* 풀이:
replaceAll('찾는문자','치환할문자') 메소드를 사용하면 간단하게 문자열을 변경시킬 수 있다.
for문으로 문자열 순회하면서 A를 찾아서 그 위치를 #으로 바꾸는 방법도 있다.
[참고]
replace('찾는문자','치환할문자'):첫번째 문자만 변경함
indexOf('찾는문자'):첫번째 문자의 인덱스만 반환함,두번째 파라미터로 검색을 시작한 인덱스 위치를 지정할 수 있다.
 */