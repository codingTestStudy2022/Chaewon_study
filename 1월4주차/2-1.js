/*
1.큰 수 출력하기
N개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
(첫번째 수는 무조건 출력)

[입력 설명]
첫줄에 자연수 N이 주어진다.
두번째 줄부터 N개의 정수가 주어진다. 

[출력 설명]
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
*/

//내 풀이:첫번째 인덱스로 초기화하고 배열을 돌면서 i와 i-1 위치의 값 비교, 앞보다 더 크면 push

function solution(arr){
    let answer = [arr[0]];
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>arr[i-1]){
            answer.push(arr[i])
        }
    }

    return answer
}

let arr = [7,3,9,8,6,12]
console.log(solution(arr))
