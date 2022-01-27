/*4-4.졸업 선물
선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다. 
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했슴지다.
선생님이 가지고 있는 예산은 한정되어 있습니다. 
현재 예산으로 최대 몇명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.

[입력설명]
첫번째 줄에 반 학생수 N(1<=N<=200000)과 예산M(1<=M<=1000000)이 주어진다.
두번째 줄부터 N줄에 걸쳐 각 학생들이 받고싶은 상품의 가격과 배송비가 입력됩니다.
상품 가격과 배송비는 각각 100,000을 넘지 않습니다. 상품 가격은 짝수로만 입력됩니다.

[출력설명]
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.

[입력 예제]
5 28
-----
6 6
2 2
4 3
4 5
10 3
[출력 예제]
4
*/

/*내 풀이:
입력받은 목록을 돌면서 가격+배송비를 합친 값이 28로 나누었을 때 나누어지면 구매 가능한거니까 answer를 ++하고 해당 가격을 예산에서 빼도록 함.
만약 나누어지지 않고 쿠폰이 있다면 쿠폰 적용.
=> 모든 조합 케이스를 검사하지 않는다.
*/

function solution(n,m,arr){
    let answer = 0
    let coupon = 1
    for(let i=0;i<n;i++){
        let price = 0
        for(let j=0;j<2;j++){
            price += arr[i][j]
        }
        if(Math.floor(m/price) === 0 && coupon === 1){
            price = Math.floor(arr[i][0]/2)+arr[i][1]
            console.log('쿠폰 적용:',arr[i],'->',price)
            coupon = 0
        }
        if(Math.floor(m/price) > 0){
            answer++
            console.log('살 수 있어요!:',arr[i])
            m -= price
            console.log('남은예산:',m,'\n=============')
        }
    }

    return answer
}

let n = 5
let m = 28
let num = [[6,6],[2,2],[4,3],[4,5],[10,3]]
console.log(solution2(n,m,num))

//해설
function solution2(n,m,arr){
    let answer = 0
    arr.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1])); //주문 목록을 오름차순으로 정렬한다.
    for(let i=0;i<n;i++){
        let money = m-(arr[i][0]/2+arr[i][1]) //i위치의 물건에 쿠폰을 먼저 적용해본다.
        let cnt = 1;
        for(let j=0;j<n;j++){
            if(j!==i && (arr[j][0]+arr[j][1])>money) break; //i가 아닌 물건이고, 이 물건의 가격이 남은 예산 초과면 반복을 중단한다.
            if(j!==i && (arr[j][0]+arr[j][1])<=money){
                money-=(arr[j][0]+arr[j][1]) //남은 예산이면 예산에서 해당 물건의 비용을 차감한다. 
                cnt++ //카운트 수를 증가한다.
            }
        }
        answer = Math.max(answer,cnt);
    }

    return answer
}