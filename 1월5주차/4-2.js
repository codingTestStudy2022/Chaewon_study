/*4-2.뒤집은 소수
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하라. 
예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
단 910을 뒤집으면 19로 숫자화 해야한다. 첫 자리부터의 연속된 0은 무시한다.

[입력 예제]
9
32 55 62 20 250 370 200 30 100
[출력 예제]
23 2 73 2 3
*/

/*내 풀이:
입력 숫자를 문자화 시켜 분리하고 뒤집은 다음 다시 문자열로 만든 다음 이를 정수화 시킨다.
2부터 3까지는 모두 소수이고 그 이후의 숫자에서 소수는 모두 6k+-1 이라는 공식을 가진다. 
이를 이용해 만약 숫자를 6으로 나누었을 때 나머지가 5 또는 1이라면 소수로 판단하고 소수 배열(answer)에 추가한다.
=>실패
*/

/* 추가 풀이:에라토스테네스의 체
제곱근까지만 돌면 그 이후부터는 앞에서 구한 수를 뒤집은 형태가 되므로 구하지 않아도 된다.
1을 제외하고 2부터 N까지 자신을 제외하고 순차적으로 자신의 배수들을 지워나가면 소수만 남는다.
즉 소수를 구하기보다는 소수가 아닌 것을 제외한다.
 */
function isPrime(num){
    if(num===1) return false
    for(let i=2;i<=parseInt(Math.sqrt(num));i++){
        if(num%i === 0) return false
    }
    return true
}
function solution(arr){
    let answer = []
    for(x of arr){
        num = Number(x.toString().split('').reverse().join(''))
        if(isPrime(num)) answer.push(num)
    }
    return answer
}

let n = 9
let num = [50,70,32,55,62,20,250,370,200,30,100]
console.log(solution(num))