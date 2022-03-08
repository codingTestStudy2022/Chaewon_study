/* 7-9.결혼식
*/
function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let t_line=[];
    for(let x of times){
        t_line.push([x[0],'s']);
        t_line.push([x[1],'e']);
    }
    t_line.sort((a,b)=>{
        if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt()
        else return a[0]-b[0]
    })
    let cnt = 0;
    for(let x of t_line){
        if(x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer,cnt)
    }
    console.log(t_line)
    return answer;
}

let arr = [[14,18],[12,15],[15,20],[20,30],[5,15]];
let arr2 = [[3,3],[1,3],[2,3]];
console.log(solution(arr));