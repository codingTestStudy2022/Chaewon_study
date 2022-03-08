/* 7-3.special sort(구글인터뷰)*/

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
