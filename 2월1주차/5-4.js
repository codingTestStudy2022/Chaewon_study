/*5-4.연속부분수열2
*/

function solution(m,arr){
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for(let rt=0;rt<arr.length;rt++){
        sum += arr[rt];
        while(sum>m){
            sum-=arr[lt++]
        }
        answer += (rt-lt+1);

    }
    return answer;
}

let arr1 = [1,3,1,2,3]
console.log(solution(5,arr1))

