/*7-2.버블정렬

풀이: n만큼 반복한다. 0부터 순회하면서 앞 숫자보다 뒷 숫자가 작으면 둘이 바꿔치기 해준다.
*/

function solution(n,arr){
    let answer = arr;
    
    for(let i=n-1;i>0;i--){
        for(let j=0;j<i;j++){
            console.log('원본',answer[j],answer[j+1])
            if(answer[j]>answer[j+1]){
                let tmp = answer[j+1]
                answer[j+1] = answer[j]
                answer[j] = tmp
                console.log('버블:',answer[j],answer[j+1])
            }

        }
    }
    return answer
}

let arr = [13,5,11,7,23,15]
console.log(solution2(6,arr))

function solution2(n,arr){
    let answer = arr;
    
    for(let i=0;i<n-1;i++){ 
        //i를 줄이는 방식 말고 그대로 해도 ㄱㅊ,맨 뒷숫자는 볼 필요 없으니까 n-1까지.
        for(let j=0;j<n-i-1;j++){
            //i만큼 돌았으니까 뒤에서 i-1번째까지는 볼 필요 없음. 
            if(answer[j]>answer[j+1]){
                let tmp = answer[j+1]
                answer[j+1] = answer[j]
                answer[j] = tmp
            }

        }
    }
    return answer
}