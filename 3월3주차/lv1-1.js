//프로그래머스 Lv1.신고 결과 받기

function solution(id_list, report, k) {
    var answer = new Object()
    id_list.map(x => {
        answer[x] = 0
    })

    let userMap = new Map(id_list.map(x => {
        return [x,[]]
    }))
    let reportMap = new Map(id_list.map(x => {
        return [x,0]
    }))
    n = report.length

    for(let i=0;i<n;i++){
        let rp_array = report[i].split(' ')

        if(!userMap.get(rp_array[0]).includes(rp_array[1])){
            let tmp = userMap.get(rp_array[0])
            tmp.push(rp_array[1])
            userMap.set(rp_array[0],tmp)
            reportMap.set(rp_array[1],reportMap.get(rp_array[1])+1)
        }
    }
    
    for(let [key,val] of userMap){
        for(let i=0;i<val.length;i++){
            if(reportMap.get(val[i]) >= k){
                answer[key] += 1
            }
        }
    }
    answer = Object.values(answer)
    return answer;
}
let id_list = ["con", "ryan"]
let report = ["ryan con", "ryan con", "ryan con", "ryan con", "con ryan"]
let k = 2
console.log(solution(id_list,report,k))