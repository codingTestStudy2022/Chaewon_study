/*5-3.연속부분수열1
해설 풀이:
수열의 왼쪽과 오른쪽을 가리킬 lt,rt를 선언하고, 
lt부터 rt까지 합한 sum이 주어진 m과 같거나 크면 lt를 통해 수열을 하나씩 빼나가고,
작다면 rt를 오른쪽으로 이동시키면서 하나씩 더해나간다.
*/

function solution(m,arr){
    let answer = 0
    let lt = 0
    let sum = 0 
    for(let rt=0;rt<arr.length;rt++){
        sum+=arr[rt]
        //더한 값이 m과 같은지 검사
        if(sum === m){
            answer++
        }
        //더한 값이 m과 같거나 크면 lt를 증가시키면서 빼나가야함.
        while(sum>=m){
            sum-=arr[lt++]
            //뺀 값이 m과 같은지 꼭 검사해서 같으면 ++
            if(sum === m){
                answer++
            }
        }
    }
    return answer;
}

let arr1 = [1,2,1,3,1,1,1,2]
console.log(solution(6,arr1))

