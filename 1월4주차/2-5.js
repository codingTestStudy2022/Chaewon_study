/*
5.등수 구하기
N(1<=K<=100)명의 학생의 국어 점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하시오

[입력 설명]
첫줄에 문제의 개수가 주어진다.
두번째 줄에 국어점수를 의미하는 N개의 정수가 입력된다.같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

[출력 설명]
입력된 순서대로 등수를 출력한다.
*/


/*내 풀이: 이중 for문을 피할 수 없을 까 생각하다가 중복을 해결 못함..
처음 생각한 풀이:배열에서 가장 큰 수를 구하고, 
indexOf로 해당 수의 index를 구한다음 answer에서 그 위치에 등수 i를 입력한다. 
비교를 위해 이미 등수를 구한 값은 0으로 만들어 최소값으로 만들어버린다.
but 중복 해결이 어려웠음.
*/

function mySolution(arr){
    let answer = [];
    for(let i=0;i<arr.length;i++){
        max = Math.max.apply(null,arr)
        maxPos = arr.indexOf(max)
        answer[maxPos] = i+1
        arr[maxPos] = 0
    }

    return answer
}

/* 해설
answer를 arr와 동일한 길이로 초기화 한다. 
이중 for문을 돌면서 현재 위치의 값보다 큰 값이 존재하는지 검사하고, 만약 더 큰 값이 있다면 있을 때마다 현재 위치의 값 등수를 내린다(+1)
*/
function solution(arr){
    let n = arr.length
    let answer = Array.from({length:n},()=>1) 
    //배열 초기화(길이:n만큼,초기값=1)

    for(let i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(arr[j]>arr[i]) answer[i]++ 
            //배열을 순회했을 때 i위치의 점수보다 큰 점수가 있으면 등수를 +1한다(등수 내려감)
        }
    }
    return answer
}

/*또 다른 풀이
:map과 filter를 이용한 풀이
*/
function solution2(arr){
    const answer = arr.map((i) => arr.filter((j) => i < j).length + 1);
    //filter((j) => i<j): j가 i보다 큰지 확인해서 큰 값이 있다면 true를 뱉고, 큰 값만 모아둔 새로운 배열을 반환한다. 
    //이 배열의 길이가 등수가 되고, map은 i 위치의 값을 이 등수로 치환한 새로운 배열을 return한다.
    return answer.length
}

let arr = [87,89,92,92,100,76]
console.log(solution2(arr))