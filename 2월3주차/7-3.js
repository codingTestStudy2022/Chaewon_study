/* 7-3.special sort(구글인터뷰)
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.
▣ 입력설명
첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진 다. 숫자 0은 입력되지 않는다.
▣ 출력설명
정렬된 결과를 출력한다.
▣ 입력예제 1
8
1 2 3 -3 -2 5 6 -6
▣ 출력예제 1
-3 -2 -6 1 2 3 5 6
 */

/* 내 풀이: 버블정렬 응용
앞에서부터 탐색하면서 음수를 만나면 버블정렬을 통해 음수를 앞으로 보낸다. 
이 때 앞에서 만난 숫자들 중 음수가 나타나면 앞으로 보내기를 멈춘다.
 */
function solution(arr){
    let answer = arr;

    for(let i=0;i<arr.length;i++){
        if(answer[i]<0){ //i위치 값이 음수면
            for(let j=i;j>0;j--){
                //i위치부터 앞으로 버블정렬 실행
                if(answer[j-1]>0){
                    //만약 j-1의 값이 음수가 아니라면 정렬
                    let tmp = answer[j-1]
                    answer[j-1] = answer[j]
                    answer[j] = tmp
                }else{
                    //j-1의 값이 음수라면 반복을 멈추도록 함
                    break;
                }

            }
        }
    }
    
    return answer
}

let arr = [1, 2, 3, -3, -2, 5, 6, -5]
console.log(solution(8,arr))

function solution2(arr){
    let answer=arr;
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>0 && arr[j+1]<0){
                [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
            }
        }   
    } 
    return answer;
}
