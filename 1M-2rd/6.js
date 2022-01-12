//홀수
/*
[입력설명]
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 
홀수가 한 개 이상 반드시 존재한다.

[출력설명]
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
*/

function solution(num){
    let sum = 0;
    let answer = [];

    for(let i=0;i<=num.length;i++){
        if(num[i] % 2 > 0){
            answer.push(num[i]);
            sum += num[i];
        }
    }

    console.log(sum)
    console.log(Math.min(...answer))
}

let num = [2,31,4,10,6,7,23]
console.log(solution(num))

/*
내 풀이
:홀수만 뽑아둘 배열 odd, 홀수의 합을 담을 sum 변수,답안을 담을 배열 answer를 선언.
입력받은 수의 길이 만큼 반복문을 돌면서 입력받은 수가 홀수인지 체크. 
2로 나누었을 때 나머지가 생긴다면(0이상인 경우)홀수이므로 조건문에서 홀수 배열 odd에 해당 값을 추가하고, 동시에 sum에 해당 수를 더한다.
반복문이 끝나면 홀수만 모아둔 odd 배열이 완성되고, 홀수만 모두 더한 sum도 완성됨.
이제 answer 배열에 바로 sum과 Math.min 메소드로 odd에서 최소값을 추출해 push한다.
그 후 answer 리턴.

+ 여러개의 값을 한번에 push할 땐 .apply 객체로 추가하는 타겟 배열과 추가할 내용을 담은 배열 두개를 인자로 전달하면
한번에 push가 가능

+ 수정: 조건이 배열이 아니라 console.log() 두번 찍는거여서 그거에 맞게 수정해줌

 */