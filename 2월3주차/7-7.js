/* 7-7.좌표정렬
N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하 세요. 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
▣ 입력설명
첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.
두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.
▣ 출력설명
N개의 좌표를 정렬하여 출력하세요.
*/


function solution(arr){
    let answer = arr

    arr.sort((a,b)=>{
        if(a[0]===b[0]) return a[1]-b[1] //x값이 같은 경우에는 y값을 기준으로 오름차순 정렬한다.
        else return a[0]-b[0] //x값이 다를 땐 x값 기준으로 오름차순으로 정렬한다.
    })
    return answer
}

let arr = [[2,7],[1,3],[1,2],[2,5],[3,6]]
console.log(solution(arr))