//삼각형 판별하기

function solution(a,b,c){
    let answer = "NO";
    let max = Math.max(a,b,c);
    let sum = a+b+c;

    if( sum - max > max){
        answer = 'YES';
    }

    return answer
}

console.log(solution(6,5,11))

//삼각형의 조건: 두 변의 합이 가장 긴 변의 길이보다 커야함.(같아서도 안됨)
/*
세 수 중 가장 큰 수를 먼저 판별한다. 
그리고 세 수중 나머지 두 개가 무엇인지 알기 어려우니 세 수를 모두 더한다. 
모두 더한 값에서 최대값을 빼면 나머지 두 값의 합이 된다. 이 수가 최대값보다 크면 삼각형이다.
*/