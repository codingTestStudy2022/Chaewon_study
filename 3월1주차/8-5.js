/*
8-5.합이 같은 부분집합 구하기(아마존 인터뷰)

 */


function solution(arr){
    let answer="NO";
    let flag = 0;
    let total = arr.reduce((a,b)=>a+b,0)
    let n = arr.length;
    function DFS(L,sum){
        if(flag) return;
        if(L === n){
            if((total-sum) === sum){
                answer = "YES";
                flag = 1
                //필요없는 재귀 방지.
            }
        }else {
            DFS(L+1,sum+arr[L]);
            DFS(L+1,sum);
        }
    }
    DFS(0,0)
    return answer
}

let num = [1,3,5,6,7,10]
console.log(solution(num))
