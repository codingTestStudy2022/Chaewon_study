/* 7-4.삽입 정렬
N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 
정렬하는 방법은 삽입정렬입니다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.

▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.

▣ 입력예제  
6
11 7 5 6 10 9

▣ 출력예제  
5 6 7 9 10 11
 */

/* 
i부터 순회, 
j는 i보다 하나 작은 값부터 0까지 순회
일단 i위치의 값을 tmp에 저장하고,만약 j위치의 값이 i위치 값(tmp)보다 크면 j위치 값을 j+1로 이동시켜서 공간을 만듬.
만약 j위치값이 i위치 값(tmp)보다 더 작으면 반복을 중단하고, 그 위치 앞(j+1)에 tmp값을 삽입

 */
function solution(arr){
    let answer = arr;
    console.log(answer)
    for(let i=1;i<answer.length;i++){
        let tmp = answer[i]
        let j;
        for(j=i-1;j>=0;j--){
            if(answer[j]>tmp){
                answer[j+1] = answer[j]
            }
            else{
                break;
            }
        }
        //j 정렬이 끝난 후에 그 위치에 tmp를 삽입해야 하는 것.
        answer[j+1] = tmp 
    }
    
    return answer
}

let arr = [11,7,5,6,10,9]
console.log(solution(arr))