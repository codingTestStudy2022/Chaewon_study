/*8-8.중복 순열 구하기
// for(let i = 1;i<=num;i++){
//     for(let j=1;i<=num;i++){
//         console.log(i,j)
//     }
// }
*/

function solution(n,m){
    let answer = []
    let tmp = Array.from({length:m},()=>0)
    function DFS(L){
        if(L === m){
            answer.push(tmp.slice());
        }else {
            for(let i=1;i<=n;i++){
                tmp[L] = i;
                DFS(L+1);
            }
        }
    }
    DFS(0)
    return answer;
}

console.log(solution(4,2))