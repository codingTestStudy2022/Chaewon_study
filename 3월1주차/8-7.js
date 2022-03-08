//8-7.최대 점수 구하기



function solution(m,ps,pt){
    let answer = 0;
    let n = ps.length;
    function DFS(L,sum,time){
        if(time > m) return;
        if(L === n){
            answer = Math.max(answer,sum)
        }else {
            DFS(L+1, sum+ps[L], time+pt[L]);//L번째 인덱스의 문제를 푼다
            DFS(L+1, sum, time);//안푼다
        }

    }
    DFS(0,0,0)
    return answer
}

let ps = [10,25,15,6,7]
let pt = [5,12,8,3,4]
console.log(solution(20,ps,pt))
