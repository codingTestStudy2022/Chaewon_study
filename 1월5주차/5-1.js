/*5-1.두 배열 합치기
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

[입력설명]
첫번째 줄에 첫번째 배열의 크기 N이 주어집니다.
두번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세번째 줄에 두번째 배열의 크기 M이 주어집니다.
네번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.

[출력설명]
오름차순으로 정렬된 배열을 출력합니다.

[입력 예제]
3
1 3 5
5
2 3 6 7 9
[출력 예제]
1 2 3 3 5 6 7 9
*/

/*(힌트 먼저 보고 코드화한)내 풀이:
포인터 변수 두개를 선언한 다음, 두 배열의 길이를 더한 만큼 순회하면서 더 작은 값을 순서대로 answer에 푸쉬한다.
만약 더 작은 쪽의 순회가 끝났다면 그냥 한 배열 내에서 작은 순서대로 푸쉬된다.
*/

function solution(arr1,arr2){
    let answer = []
    let p1 = p2 =  0
    let loop = arr1.length + arr2.length
    for(let i=0;i<loop;i++){
        if(arr1[p1]<=arr2[p2]){
            answer.push(arr1[p1])
            p1++
        }else{
            answer.push(arr2[p2])
            p2++
        }
    }
    return answer
}

let arr1 = [1,3,5]
let arr2 = [2,3,6,7,9]
console.log(solution(arr1,arr2))

//다른 풀이:while문으로 두 배열의 범위 안에서 반복 후 범위 밖의 배열은 통째로 푸쉬한다.
function solution(arr1,arr2){
    let answer = []
    let p1 = p2 =  0
    let n = arr1.length;
    let m = arr2.length
    while(p1<n && p2<m){
        if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);//p1위치의 값을 넣은 후 ++되는 것.
        else answer.push(arr2[p2++])
    }
    while(p1<n) answer.push(arr1[p1++])
    while(p2<m) answer.push(arr2[p2++])
    return answer
}