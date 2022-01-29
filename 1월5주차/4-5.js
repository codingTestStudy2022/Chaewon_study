/*4-5.K번째 큰 수
현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 
같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 합니다.
3장을 뽑을 수 있는 모든 경우의 수를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하시오.
만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19...이고 K값이 3이라면 K번째 큰 값은 22입니다.

[입력설명]
첫번째 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50)이 입력되고,그 다음 줄에 N개의 카드값이 입력된다.

[출력설명]
첫 번째 줄에 K번째 수를 출력합니다. K번째 수가 존재하지 않으면 -1을 출력합니다.

[입력 예제]
10 3
13 15 34 23 45 65 33 11 26 42
[출력 예제]
143
*/

/*내 풀이:
3중 for문을 돌면서 모든 조합을 더하고, 더한 값을 따로 저장하는 배열을 생성해 거기에 push한다. 
push 후 sort하고, set을 이용해 중복값을 제거한 다음 3번째 숫자를 반환하도록 한다.
++잊은 점
=>리스트를 먼저 set으로 구현하면 알아서 중복제거되어서 들어간다.
=>k는 배열에서 k-1로 지정해야 맞게 나온다.
=>sort는 디폴트가 오름차순이라 작은것부터 정렬된다.
=>중복값끼리 더해지지 않기 위해 j는 i+1,k는 j+1부터 시작한다.
*/

function solution(n,k,arr){
    let answer = 0
    let sumList = []
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                sumList.push(arr[i]+arr[j]+arr[k])
            }
        }
    }
    sumList = [...new Set(sumList)]
    sumList.sort()
    answer = sumList[k]
    return answer
}

let n = 10
let k = 3
let num = [13,15,34,23,45,65,33,11,26,42]
console.log(solution2(n,k,num))

//해설
//Set으로 먼저 선언하고 값을 추가한다.-알아서 중복제거됨
//sort()를 내림차순으로 변경한다.
//k-1번 위치의 값을 지정한다.
function solution2(n,k,arr){
    let answer = 0
    let sumList = new Set()
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                sumList.add(arr[i]+arr[j]+arr[k])
            }
        }
    }
    sumList = [...sumList]
    sumList.sort((a,b)=>b-a)
    answer = sumList[k-1]
    return answer
}