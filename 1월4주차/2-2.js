/*
1.큰 수 출력하기
선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질때
맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요.
(앞에 서 있는 사람들보다 크면 보이고,작거나 같으면 보이지 않습니다.)

[입력 설명]
첫줄에 정수 N이 주어진다.
두번째 줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다. 

[출력 설명]
선생님이 볼 수 있는 최대 학생수.
*/

//내 풀이:
//가장 큰 키를 저장할 비교용도의 변수 maxHeight에 배열을 돌면서 지금까지 가장 키가 큰 값을 저장하고 answer를 +1하며 카운팅,
//뒤로 가면서 현재 가장 큰 키보다 더 큰 값이 나오면 maxHeight를 변경하고 카운팅하며 비교를 이어감.

function solution(arr){
    let answer = 0;
    let maxHeight = 0;
    for(height of arr){
        if(height > maxHeight){
            maxHeight = height
            answer++
        }
    }
    return answer
}

let arr = [130,135,148,140,145,150,150,153]
console.log(solution(arr))
