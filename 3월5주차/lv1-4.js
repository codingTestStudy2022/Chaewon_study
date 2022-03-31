//숫자 문자열과 영단어
function solution(s) {
    let answer;
    let arr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let tmp = ''
    for(x of s){
        //문자열인 경우
        if(!Number(x)){
            tmp += x 
            //문자열을 하나씩 추가해서 만들고
            if(arr.includes(tmp)){
                //일치하는 문자가 나왔을 때 해당 단어를 배열의 인덱스로 바꾸도록 함, 임시 문자열은 초기화
                s=s.replace(tmp,arr.indexOf(tmp))
                tmp = ''
            }
        }
    }

    return Number(answer);
}


console.log(solution2("one4seveneight"))

//더 좋은 풀이들이 많다!
function solution2(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    //각각 문자열들로 배열을 분리하고 그 위치를 숫자로 연결
    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        console.log('split answer:',arr)
        answer = arr.join(i);
        console.log('join answer',answer)
    }

    return Number(answer);
}

function solution3(s) {
    //처음 생각한 풀이, 정규식 사용하기
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}

function solution4(s) {
    //이것도 고려했던건데 위에 두개가 더 좋은거였나보다
    let charSet = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }

    for(let [key, value] of Object.entries(charSet)) {
        //key와 일치하는 값을 value값으로 대치
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    return parseInt(s);
}
