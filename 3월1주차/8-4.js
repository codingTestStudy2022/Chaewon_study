/*
8-4.부분집합 구하기*/


function solution(num){
    let answer=[];
    let ch = Array.from({length:num+1},()=>0)
    function DFS(v){
        if(v === num+1){
            let tmp = ''
            for(let i=1;i<=num;i++){
                if(ch[i]===1) tmp+=i+' '
            }
            if(tmp.length>0) answer.push(tmp.trim())
        }else {
            ch[v]=1
            DFS(v+1)//왼쪽,체크
            ch[v]=0
            DFS(v+1)//오른쪽,체크X
        }
    }
    DFS(1)
    return answer
}

let num = 3
console.log(solution(num))
