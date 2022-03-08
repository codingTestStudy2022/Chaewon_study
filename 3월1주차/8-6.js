//8-6.바둑이 승차


function solution(arr,weight){
    let answer = 0;
    function DFS(L,sum){
        if(L === arr.length){
            if(sum < weight){
                answer = Math.max(sum,answer) 
            }
            return;
        }else {
            //sum==부분집합, 배열을 돌면서 다음 요소를 포함 하는가(O),안하는가(X)에 따라 노드가 갈림.
            DFS(L+1,sum+arr[L]);
            DFS(L+1,sum);
        }

    }
    DFS(0,0)
    return answer
}

let num = [81,58,42,33,61]
console.log(solution(num,259))
