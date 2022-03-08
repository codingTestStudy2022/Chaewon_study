/* 7-10.이분 검색
 */

function solution(arr,n){
    let answer = 0;
    let rt = arr.length;
    let lt = 0
    arr.sort((a,b)=>a-b)
    
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        if(arr[mid] === n){
            answer = mid+1;
            break;
        }else if(arr[mid] > n){
            rt = mid-1;
        }else{
            lt = mid_1;
        }
    }
    
    return answer;
}

let arr = [23,87,65,12,57,32,99,81]
console.log(solution(arr,65));