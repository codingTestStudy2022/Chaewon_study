/*
7-11.뮤직비디오(결정알고리즘)
설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 
17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.
 */


//풀이: 최소 용량은 노래중에서 가장 큰 수, 최대 용량은 그냥 크게 두고, 이분 검색을 통해 최소 용량을 찾아나간다.
function count(songs,capacity){
    //cd장 수를 return하는 함수
    let cd = 0
    let count = 1
    for(let i = 0;i<songs.length;i++){
        if(cd+songs[i] > capacity){
            //용량 초과시 카운트를 ++하고, 새로 셀 cd용량을 현재 곡의 용량으로 초기화. 
            count++
            cd = songs[i]
        }else{
            cd += songs[i] //용량을 계속 누적시켜봄.
        }
    }
    return count
}
function solution(songs,m){
    let answer = 0;
    let lt = Math.max.apply(null,songs)
    let rt = songs.reduce((a,b)=>a+b,0)

    while(lt<=rt){
        let mid = parseInt((lt+rt)/2)
        let cd = count(songs,mid)
        if(cd <= m){
            answer = mid
            rt = mid-1
        }else{
            lt = mid+1
        }
    }
    return answer;
}
let dvd = 3
let songs = [1,2,3,4,5,6,7,8,9]
console.log(solution(songs,dvd));