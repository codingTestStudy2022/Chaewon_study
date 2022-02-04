/*5-5.최대 매출
현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출 기록을 주고
연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 합니다.
만약 N=10이고 10일간의 매출 기록이 아래와 같습니다. 이떄 K=3이면
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+56=56만원입니다.
*/

/* 내풀이:
p1,p2를 각각 0,2로 시작하게 해서 그 사이의 매출을 더하고 둘다 +1씩 시킴.
+1 될 때마다 매출을 더하고 answer와 비교한다. 기존의 값보다 더 크면 answer를 새로운 값으로 바꿈. 
p2가 N보다 크면 반복 종료.

=> K가 3일때만 적용이 가능하다는 문제 존재.
 */
function solution(k,arr){
    let answer = 0;
    let p1 = 0

    for(let p2 = k-1; p2 < arr.length; p2++){
        let sum = arr[p1]+arr[p1+1]+arr[p2]
        console.log(sum)
        if(answer < sum){
            answer = sum
        }
        p1++ 
    }
    return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
console.log(solution2(3,arr))

/* 해설(sliding window):
계속 sum을 만들면서 그 다음 값을 더하고, 범위 이전 값은 빼면서 나아가는 것.
예를들어 12,15,11,20,25,10이고 K가 4면 
12+15+11+20은 최초의 sum이 되고, 그 다음으로는 이 sum에서 +25-12를 한다.
 */
function solution2(k,arr){
    let sum = 0;
    //k만큼 합친 값으로 sum 초기화
    for(let i=0;i<k;i++){
        sum+=arr[i]
    }
    let answer = sum;
    for(let p = k;p<arr.length;p++){
        sum = sum + arr[p] - arr[p-k] //p-k 하면 범위 설정 됨.
        answer = Math.max(answer,sum) //최대값으로 answer 설정
    }
    return answer;
}