// 연필 개수 구하기
function solution(a){
    let answer = Math.ceil(a / 12)
    return answer
}

console.log(solution(178))

/*
인원당 한 자루라면 인원 수 / 12(한 다스)로 나누어 몫을 구한다.
이 때 나머지가 발생하면 추가로 1다스가 필요하기 때문에 소수점 자리를 올림하도록 구현했다.

다른 방법으로는 나머지가 0이 아니면 몫에 +1을 하는 방법으로 구현할수도 있다.
 */