//8-10.순열 구하기
//순열 코드는 외워라!!

function solution(arr,m){
    let answer = []
    let n = arr.length
    let tmp = Array.from({length:m},()=>0)
    let ch = Array.from({length:n},()=>0)

    function DFS(L){
        if(L === m){
            answer.push(tmp.slice())
        }else {
            //아래가 순열 코드. 순열 코드는 외워라!!
            for(let i=0;i<n;i++){
                if(ch[i]===0){
                    tmp[L] = arr[i]
                    DFS(L+1);
                    ch[i]=0
                }
            }
        }
    }
    DFS(0)
    return answer;
}

let arr = [3,6,9,5]
console.log(solution(arr,2)) 