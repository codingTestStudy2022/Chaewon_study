// 1부터 N까지 합 구하기
function solution(num){
    let answer=0;
    for(let i=1;i<=num;i++){
        answer += i
    }
    return answer
}

console.log(solution(4))

/*
내 풀이:1부터 입력받은 수까지 반복하며 answer 변수에 값을 더한다.

 */