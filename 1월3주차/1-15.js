/*
15.가운데 문자 출력
소문자로 된 단어(문자열)이 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성
단어의 길이가 짝수일 경우 가운데 2개 문자 출력

[입력 설명]
문자열 입력

[출력 설명]
가운데 문자 출력
*/

/* 
내 풀이:
<길이가 홀수인 경우>
문자열의 길이를 2로 나누었을 때 나머지가 0이 아니라면 홀수 길이를 가진 문자열 
2로 나누었을 때 나오는 값을 소수점내림 해서 해당 위치의 문자 반환. 
올림을 하지 않는 이유는 문자열 카운팅은 0부터 시작하기 때문에 나누기 기준으로 올림/반올림을 하면 중간 다음 위치의 문자열이 반환됨.

<길이가 짝수인 경우>
문자열 길이를 2로 나누어(반으로 쪼갬) 해당 위치와 해당 위치 하나 앞쪽의 문자를 반환.
이때 문자열은 0부터 시작하니까 2로 나눈 값의 위치가 뒷 문자가 됨. 
slice로 쪼갤 문자의 범위를 지정했을때 실제 반환값은 end값을 포함하지 않기 때문에 2로 나눈값의 -1,+1을 범위로 지정해주었다.
*/

function solution(string){
    let answer = '';
    let midIndex = Math.floor(string.length / 2)
    if(string.length % 2 !== 0){
        //문자열의 길이가 홀수라면 2로 나누어 내림한 값을 인덱스로 전달
        answer = string[midIndex]
    }else{
        //짝수라면 2로 나눈 값과 그 앞의 값을 전달
        answer = string.slice(midIndex-1,midIndex+1)
        //slice할때 end값은 포함이 안되므로 +1 해줬다.
    }

    return answer
}
console.log(solution3('students'))

// 방법2: substring()이용
function solution2(string){
    let answer = '';
    let midIndex = Math.floor(string.length / 2)
    if(string.length % 2 !== 0){
        //substring은 slice와 유사함. 중간값과 중간값+1을 범위로 줘서 중간값만 추출. end값은 포함 안되니까 중간값만 추출됨.
        answer = string.substring(midIndex,midIndex+1);
    }else{
        //짝수라면 2로 나눈 값-1과 나눈 값+1을 범위로 전달. 역시 end값은 포함이 되지 않음.
        answer = string.substring(midIndex-1,midIndex+1)
    }

    return answer
}

// 방법3:substr() 이용, substr()은 시작 인덱스,추출개수를 파라미터로 전달.
function solution3(string){
    let answer = '';
    let midIndex = Math.floor(string.length / 2)
    if(string.length % 2 !== 0){
        //중간값에서부터 1개를 추출하겠다.(=중간값 1개)
        answer = string.substr(midIndex,1);
    }else{
        //중간값-1인 값에서부터 2개를 추출하겠다.(=중간값-1,중간값)
        answer = string.substr(midIndex-1,2)
    }

    return answer
}

