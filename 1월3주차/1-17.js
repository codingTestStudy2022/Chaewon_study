/*
17.중복 단어 제거
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
출력하는 문자열은 원래의 순서를 유지한다.

[입력 설명]
첫줄에 자연수 N이 주어진다.
두번째 줄부터 N개의 문자열이 주어진다. 

[출력 설명]
첫 줄부터 중복이 제거된 문자열을 차례로 출력
*/

//내 풀이:set으로 words 배열에서 중복을 제거한 객체를 생성하고 이를 배열로 변환한다.

function solution(words){
    let answer = [...new Set(words)];
    return answer
}

let words = ['student','study','school','student']
console.log(solution(words))

//방법 2: filter메소드와 콜백함수에서 indexOf를 이용해 중복단어 검사.
//filter의 콜백함수로 words의 각 요소와 현재 index를 전달하고, words 배열에서 현재 단어의 indexOf 값과 현재 index가 같은지 검사한다.
//같다면 중복이 아니므로 true 반환, 다르다면 중복이므로 false를 반환한다.
function solution2(words){
    let answer;
    answer = words.filter((word,index)=>{
        return words.indexOf(word) === index;
        // if(words.indexOf(word) === index) return true 와 같음.
    })
    return answer
}