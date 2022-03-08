/*5-2.공통 원소 구하기
내 풀이:
집합을 먼저 오름차순으로 정렬한다.
포인터 변수 두개를 선언한 다음, 두 배열의 길이 만큼 순회하면서 같은 수가 나오면 포인터 둘 다 ++,아니면 하나만 ++한다.
포인터가 가리키는 수가 같으면 answer에 삽입한다.

+ 놓친 부분: 더 작은 숫자를 ++시켜야 한다.
*/

function solution(arr1,arr2){
    let answer = []
    let p1 = p2 =  0
    arr1.sort()
    arr2.sort()

    let loop = arr1.length + arr2.length
    console.log(loop)

    for(let i=0;i<loop;i++){
        if(arr1[p1] !== arr2[p2]){
            console.log(arr1[p1],arr2[p2])
            p1++
        }else if(arr1[p1] === arr2[p2]){
            answer.push(arr2[p2])
            p1++
            p2++
        }
    }
    return answer
    
}

let arr1 = [1,3,5,19,92]
let arr2 = [3,32,5,77,88]
console.log(solution2(arr1,arr2))


//해설: for문보다는 while문에 조건을 넣어서 한 쪽이 끝날때까지 반복하도록 만든다.
function solution2(arr1,arr2){
    let answer = [];
    let p1 = p2 =  0;
    //sort는 항상 기준을 주어야 한다. 문자열처럼 정렬되기 때문에 10이 들어오면 1,10,3,5...이렇게 됨.
    //오름차순:a-b,내림차순:b-a
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    console.log(arr1,arr2)

    //둘 중 하나의 길이가 끝날 때까지 반복, 하나의 값이 배열 길이와 같아지면 &&이 false가 됨.
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1] === arr2[p2]){
            //두 값이 같으면 answer에 push하고 p1,p2를 +1한다.
            answer.push(arr1[p1++]);
            p2++;
        }else if(arr1[p1]<arr2[p2]){
            //만약 p1이 가리키는 값이 더 작다면 p1을 +1한다.
            p1++;
        }else{
            //만약 p2가 가리키는 값이 더 작다면 p2을 +1한다.
            p2++;
        }
    }
    return answer
    
}