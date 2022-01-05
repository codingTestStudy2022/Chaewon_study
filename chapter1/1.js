//1. 세 수 중 최소값 구하기

function solution(a,b,c){
    let answer = Math.min(a,b,c)
    return answer;
}

console.log(solution(6,5,11))

//프로그래머스에서 입력=매개변수 

/*
풀이:
Math.min(value1,value2...) 는 최솟값을 반환하는 자바스크립트 내장 객체의 메소드

또다른 풀이:

function solution(a, b, c){
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;
}

console.log(solution(2, 5, 1))


유사템:Math.max(value1,value2...)최댓값 반환
Math.min.apply(null,array): 배열 안에서 가장 작은 수 반환
Math.max.apply(null,array): 배열 안에서 가장 작은 수 반환
 */