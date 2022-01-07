//최솟값 구하기
function solution(num){
    let answer=Math.min.apply(null,num)
    return answer
}

let num=[1,3,4,5,6,67,30]
console.log(solution(num))

/*
내 풀이:1번 문제에서 공부했던 apply메소드를 활용. 배열에 여러개의 수를 주고 배열 내에서 최소값을 구하도록 구현.
Math.min(...arr) 으로 해도 가능.
 */