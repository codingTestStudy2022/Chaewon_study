/*
4.점수 계산
여러 개의 OX문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 
하기로 하였다. 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 첫 문제는 1점으로 계산한다.
또한 연속으로 문제의 답이 맞는 경우에서 두번째 문제는 2점, 3번째 문제는 3점..K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.

[입력 설명]
첫줄에 문제의 개수가 주어진다.
두번째 줄에 N개의 문제의 채점 결과를 나타내는 0 혹은 1이 주어진다. 0은 문제의 답이 틀린 경우, 1은 문제의 답이 맞는 경우이다.

[출력 설명]
채점 결과에 대하여 가산점을 고려한 총 점수를 출력
*/

/*내 풀이: 
가산점을 고려한 점수를 카운팅할 bonus라는 변수를 만들어서 문제가 맞을때마다 +1시키고 틀리면 0으로 초기화한다. 
계속 문제를 맞는다면 가산점이 1,2,3..순으로 올라갈 것이고, 틀리면 0으로 초기화된다. 초기화 후에 맞춘 문제가 나타나면 다시 1,2..순으로 카운팅될 것이다.
이 bonus를 answer에 계속 더하면 총점이 된다.
*/

function solution(arr){
    let answer = 0;
    let bonus = 0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i] === 1){
            bonus++
            answer += bonus
        }else{
            bonus = 0
        }
    }
    return answer
}

let arr = [1,0,1,1,1,0,0,1,1,0]
console.log(solution(arr))
