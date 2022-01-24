/*4-1.자릿수의 합
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

[입력 예제]
7
128 460 603 40 521 137 123
[출력 예제]
137
*/

/*내 풀이:
총합을 순서대로 담을 sum 목록을 하나 생성한다. 
1)for문으로 자연수 목록을 순회한다.
2)자연수의 몫이 한자리 수가 될 때까지 10으로 나누어 몫과 나머지를 구한다. 이 때 나머지가 자연수의 자릿수가 된다.
    * 몫을 먼저 구해서 저장하면 나머지를 구할 때 값이 변경되므로 q를 n으로 초기화한 뒤 나머지부터 구하도록 한다.
    * 10으로 나눌 때 마다 생기는 나머지를 계속 누적하여 자릿수의 합을 만든다.
    * 자릿수의 합을 sum 배열로 푸쉬한다.
3)자릿수의 합 배열에서 가장 큰 첫번째 값의 인덱스를 구하고, 그 인덱스를 num 배열의 인덱스로 사용한다.
4)중복값을 찾기 위해 가장 큰 첫번째 자릿수의 합과 그 뒤의 최대 자릿수의 합을 비교하며 반복문을 돈다.
만약 이 둘이 같다면 maxIndex를 두번째로 큰 자릿수의 합 인덱스로 초기화하고 
num 배열에서 해당 위치의 값을 max배열에 추가한다.
5)max에서 가장 큰 값을 answer에 할당하고 반환한다.

아쉬운 점(고민):꼭 루프를 두번 돌아야 하나..?중복값을 찾아내는 과정을 덜었으면 좋겠다.
*/
function solution(num){
    let sum = []
    for(n of num){
        let q = n;
        let r = 0;
        while(q>0){
            r += q%10
            q = Math.floor(q/10)
        }
        sum.push(r)
    }
    let maxIndex = sum.indexOf(Math.max(...sum))
    let max = [num[maxIndex]]
    //sum의 최대 값과 sum의 새로운 최대값이 같은 동안 max에 값을 추가한다.
    while(sum[maxIndex] == sum[sum.indexOf(Math.max(...sum),maxIndex+1)]){
        maxIndex = sum.indexOf(Math.max(...sum),maxIndex+1)
        max.push(num[maxIndex])    
    }

    let answer = Math.max(...max)
    return answer
}

let num = [128,460,603,40,521,137,123,740]
console.log(solution3(num))

/* 해설:
일단 위에서 10으로 나누어서 자릿수를 구하고 합하는 과정은 맞음!
tmp = 몫(q), sum = 나머지(r)
대신 총합을 바로 max값과 비교하면서 최대값으로 만들고, answer에 바로 값을 넣어버리면 됨.
중복값 비교를 위해서는 max값과 자릿수 총합이 같은 경우에만 원본 배열에서의 값 차이를 확인하고 바꿔치면 됨.
*/
function solution2(num){
    let answer;
    let max = 0
    for(n of num){
        let tmp = n;
        let sum = 0
        while(tmp){
            sum += tmp&10
            tmp = Math.floor(tmp/10)
        }
        if(sum>max){ //만약 최대값보다 현재의 총합이 더 크다면
            max = sum //max를 지금 구한 자릿수의 합으로 갱신한다.
            answer = n //answer는 현재의 수가 된다.
        }else if(sum === max){//만약 최대값과 현재의 총합이 똑같다면
            if(x>answer) answer = n //현재 값과 answer의 값을 비교해서 더 큰 걸로 바꾼다.
        }
    }
    return answer
}

/* 추가 해설:나머지로 자릿수 구하기 대신 더 빠르게 한줄로 해결하기
자연수를 문자열로 바꿔서 그냥 한 글자씩 분리시키고 얘네를 다시 더하면 된다.(천재신가)
콜백 함수의 인자로 a를 0으로 초기화 시키고, 정수로 바꾼 각 문자들을 a에 더해가며 누적한다.
<reduce()>
a:accumulator(콜백 함수의 반환값 누적) b:currentNumber(배열의 현재 값), 0=initial value(초기화하지 않으면 배열의 첫번째 값을 초기값으로 설정)
 */
function solution3(num){
    let answer = 0;
    let max = 0
    for(n of num){
        let sum = n.toString().split('').reduce((a,b)=>a+Number(b),0)
        if(sum>max){ //만약 최대값보다 현재의 총합이 더 크다면
            max = sum //max를 지금 구한 자릿수의 합으로 갱신한다.
            answer = n //answer는 현재의 수가 된다.
        }else if(sum === max){//만약 최대값과 현재의 총합이 똑같다면
            if(n>answer) answer = n //현재 값과 answer의 값을 비교해서 더 큰 걸로 바꾼다.
        }
    }
    return answer
}