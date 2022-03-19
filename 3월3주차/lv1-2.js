//프로그래머스 Lv1. 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    var answer = new Array(2);
    let rank = [6,6,5,4,3,2,1]

    //최저 등수.
    let minScore = lottos.filter(x=>win_nums.includes(x)).length
    answer[1] = rank[minScore]

    //최고 등수
    let unknown = lottos.includes(0) ? lottos.filter(x=>0 === x).length : 0
    let maxScore = unknown + minScore 
    answer[0] = rank[maxScore]
    return answer;
}

let lottos = [0, 0, 0, 0, 0, 0]
let win_nums = [38, 19, 20, 40, 15, 25]
console.log(solution(lottos,win_nums))