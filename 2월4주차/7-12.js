/*
7-12.마구간정하기
 */

function count(stable,dist){
    let cnt = 1, ep = stable[0];
    for(let i=1;i<stable.length;i++){
        if(stable[i]-ep>=dist){
            cnt++;
            ep = stable[i];
        }
    }
    return cnt
}

function solution(arr,horse){
    let answer = 0;
    let lt = 1
    let rt = arr[arr.length-1]
    arr.sort((a,b)=>a-b)
   
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        let ep = 1
        if(count(arr,mid)>=horse){
            answer = mid;
            lt = mid+1
        }else{
            rt = mid-1;
        }
    }
    return answer;
}
let arr = [1,2,8,4,9]
console.log(solution(arr,3));