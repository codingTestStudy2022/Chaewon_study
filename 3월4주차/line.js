//각 logs[i] 길이 100이상이면 ++
//각 log를 ' '으로 자르고 :를 제거했을 떄, 원소가 8이 아니라면 문제니까 ++
//각 log의 홀수 위치가  

// function solution(logs) {
//     let answer = -1;
//     const regExp = /[a-z]\s\:\s[a-zA-Z]\s[a-z]\s\:\s[a-zA-Z]\s[a-z]\s\:\s[a-zA-Z]\s[a-z]\s\:\s[a-zA-Z]/

//     for(log of logs){
//         if(!regExp.test(log) || log.length>100){
//             answer++
//         }
//         log = log.split(' ')
        
//     } 
//     return answer;
// }

// console.log(solution(
//     ["team_name : db application_name : dbtest error_level : info message : test", 
//     "team_name : test application_name : I DONT CARE error_level : error message : x", 
//     "team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever", 
//     "team_name : oberervability application_name : LogViewer error_level : error"]
// ))

// function solution(arr, brr) {
//     let answer = 0;
//     let n = arr.length;
//     console.log(arr)

//     for(let i=0;i<=n;i++){
//         let min = arr.indexOf(Math.min.apply(null,arr))
//         let max = arr.indexOf(Math.max.apply(null,arr))

//         if(arr[i] !== brr[i]){
//             arr[min] = arr[min] + (Math.abs(arr[min] - brr[min]))
//             arr[max] = arr[max] - (Math.abs(arr[max] - brr[max]))
//             answer++ 
//             console.log(arr,answer)
//         }
//     }
//     return answer;
// }

// console.log(solution([3,7,2,4],[4,5,5,2]))

function solution(sentences, n) {
    var answer = -1;
    for(let i=0;i<sentences.length;i++){
        let needsKey = [...new Set(sentences[i])]
        let maxScore = 0

        if(needsKey.length < n){
            for(let j=0;j<sentences[i].length;j++){
                if(sentences[i][j].charCodeAt()<=90 && sentences[i][j].charCodeAt()>=65){
                    maxScore = maxScore+2
                }else{
                    maxScore = maxScore+1
                }
            }

            answer = Math.max(maxScore,answer)
        }
    }
    return answer;
}
console.log(solution(["line in line", "LINE", "in lion"],5))