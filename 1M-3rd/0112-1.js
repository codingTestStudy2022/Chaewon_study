//8.일곱난쟁이
/*
왕비를 피해 일곱난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
일과를 마치고 돌아온 난쟁이가 일곱명이 아닌 아홉명이였던 것이다. 
뛰어난 수학적 직관력을 가지고 있던 백설공주는, 일곱 난쟁이의 키의 합이 100이 됨을 기억해냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱난쟁이를 찾는 프로그램을 작성하시오.
[입력 설명]
아홉개의 줄에 걸쳐 난쟁이들의 키가 주어진다 주어지는 키는 100을 넘지 않는 자연수이며,
아홉난쟁이의 키는 모두 다르다. 가능한 정답이 여러개인 경우에는 아무거나 출력한다.
[출력 설명]
입력된 순서대로 일곱 난쟁이의 키를 출력한다
*/

function getSum(arr){
    let sum = arr.reduce(function add(sum,currValue){
        return sum + currValue;
    },0);//2번째 파라미터는 초기화값

    return sum
}

function solution(heightArr){
    let answer=heightArr; //answer를 입력값과 동일하게 만듬
    let sum = getSum(answer);

    for(let i=0;i<=answer.length;i++){
        for(let j=i+1;j<=answer.length;j++){
            if(sum - (answer[i]+answer[j]) === 100){
                answer.splice(i,1)
                answer.splice(j-1,1) 
                /*splice는 값을 제거하면서 배열 길이도 줄어듬. 
                길이가 줄어들었으니까 기존 j에서 -1해야 j가 원래 가리키던 값을 가리킬 수 있음.*/
                break;
            }
        }
    }
    
    console.log(getSum(answer))
    return answer
}

let height = [20,7,23,19,10,15,25,8,13]
console.log(solution(height))

/* 풀이:
이중 for문을 돌면서 두 개의 수를 제외한 합이 100과 맞아떨어지는 조합을 찾아낸다.
배열의 전체 합을 구해놓고, 주어진 키 배열을 앞에서부터 하나씩 보면서 두 개의 숫자 조합을 하나씩 검사해봄.
100으로 나누어떨어지는 조합을 찾으면 인덱스가 i와 j인 요소를 제거하고 반복문 중단.
 */