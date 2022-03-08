/* 7-6.장난꾸러기 현수*/

//내 풀이: for문으로 i부터 탐색, 오름차순인데 만약 뒷 키보다 더 큰 수가 나타나면 일단 answer에 push, 그 뒤부터 j로 탐색하면서 앞 번호보다 작은 수가 있는 위치를 찾아내 answer에 push하고 반복 종료.
function solution(arr){
    let answer = []
    let n = arr.length;

    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            //뒷번호보다 큰 키를 가진 경우 = 현수 
            answer.push(i+1)
            for(let j=i+2;j<n;j++){
                //뒷번호의 뒤부터 탐색 
                if(arr[j]<arr[j-1]){
                    //앞번호보다 작은 키를 가진 게 등장한 경우 = 짝궁
                    //실제 번호는 인덱스+1
                    answer.push(j+1) 
                }
            }
            break;
        }
    }
    return answer
}

let arr = [120,125,152,130,135,135,140,127,160]
console.log(solution2(arr))

/*해설 보고 새로운 풀이: 
기존 arr를 복사하고, 복사한 배열을 정렬시킨 sortArr를 생성. 원본 배열과 제대로 정렬된 배열에서 다른 부분이 현수와 짝꿍
*/
function solution2(arr){
    let sortArr = arr.concat();
    sortArr.sort((a,b)=>a-b);
    console.log(arr,sortArr)
    let answer = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== sortArr[i]){
            answer.push(i+1)
        }
    }
    return answer
}
