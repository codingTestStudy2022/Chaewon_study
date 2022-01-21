/*
7.봉우리
지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자판의 숫자 중
자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는지 알아내는 프로그램을 작성하세요.
격자의 가장자리는 0으로 초기화 되었다고 가정한다.


[입력 설명]
첫 줄에 자연수 N이 주어진다.
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.

[출력 설명]
봉우리의 개수를 출력합니다.
*/

//내 풀이:
//네 방향을 0으로 초기화하고 양끝이 아닌 동안에 4방향을 탐색하도록 함.
//풀이 맞긴 하지만 가독성 별로, 삼항연산자로 가독성 높일 수 있음. xy좌표배열 이용한 풀이도 꼭 기억해놓기!
function solution(arr){
    let n = arr.length;
    let answer = 0;
    let top,bottom,left,right

    for(let i=0;i<n;i++){
        top = 0
        bottom = 0
        left = 0
        right = 0
        for(let j=0;j<n;j++){
            if(i>0){
                top = arr[i-1][j]
            }
            if(i < n-1){
                bottom = arr[i+1][j]
            }
            if(j>0){ 
                left = arr[i][j-1]
            }
            if(j < n-1){
                right = arr[i][j+1]
            }
            console.log(top,bottom,left,right)

            if(arr[i][j] > top && arr[i][j] > bottom && arr[i][j] > left && arr[i][j] > right){
                answer++
                console.log(answer)
            }
        }
    }
    return answer
}

let arr = [
    [5,3,7,2,3],
    [3,7,1,6,1],
    [7,2,5,3,4],
    [4,3,6,4,1],
    [8,7,3,5,2]]
console.log(solution3(arr))

//해설
//4가지 방향을 탐색하는 dx,dy배열에 각 방향을 가리키는 인덱스를 만들어놓고 [i][j]값을 기준으로 4개의 방향을 탐색한다.
//만약 4가지 방향 중 한군데에서 기준점보다 큰 값(봉우리)가 발견되면 봉우리가 아닌것으로 판단한다.

function solution2(arr){
    let answer = 0;
    let n = arr.length;

    //left,bottom,right,top
    let dx=[-1,0,1,0] //x좌표 이동값
    let dy=[0,1,0,-1] //y좌표 이동값

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let flag = 0 //봉우리인지 아닌지 판단할 flag함수
            for(let k=0;k<4;k++){
                //기준점의 좌우, 상하를 저장한다.  
                let nx = i+dx[k] 
                let ny = i+dy[k]
                if(nx>=0 && nx<n && ny<n && arr[nx][ny]>=arr[i][j]){
                    //조건1.봉우리가 바깥에 있지 않은가?(x의 범위가 0을 벗어나지 않아야 함)
                    //조건2.봉우리가 바깥에 있지 않은가(y의 범위가 0을 벗어나지 않아야 함)
                    //조건3.방금 탐색한 위치의 봉우리가 현재 위치 봉우리보다 높은가?
                    flag = 1
                    break;
                }
            }
            if(flag) answer++;
        }
    }
    return answer
}

//+내 풀이를 좀 더 심플하게 바꾸기 위해 삼항연산자를 쓸 수 있음.
function solution3(arr){
    let n = arr.length;
    let answer = 0;
    let top=bottom=left=right=0

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            top = (i>0) ? arr[i-1][j] : 0
            bottom = (i<n-1) ? arr[i+1][j] : 0
            left = (j>0) ? arr[i][j-1] : 0
            right = (j<n-1) ? arr[i][j+1] : 0

            if(arr[i][j] > top && arr[i][j] > bottom && arr[i][j] > left && arr[i][j] > right){
                answer++
            }
        }
    }
    return answer
}