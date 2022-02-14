/*7-1.선택 정렬

풀이: 현재 i위치의 값을 최소값(min)으로 지정하고,  그 다음 위치 j부터 탐색한다.
탐색을 하나씩 하면서 더 작은 값이 나타나면, min을 j위치의 값으로 변경하고, i위치의 값을 min으로, j위치의 값을 i위치의 값으로 바꿔치기한다. 
*/

function solution(n,arr){
    let answer = arr;
    
    for(let i=0;i<n;i++){
        let min = answer[i]
        for(let j=i+1;j<n;j++){
            if(answer[j]<min){
                min = answer[j]
                answer[j] = answer[i]
                answer[i] = min
            }
        }
    }
    return answer
}

let arr = [1,3,5,4,8]
console.log(solution(6,arr))
