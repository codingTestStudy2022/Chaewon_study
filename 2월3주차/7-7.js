/* 7-7.좌표정렬*/


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