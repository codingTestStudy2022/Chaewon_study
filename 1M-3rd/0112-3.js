/*
10.특정 문자 찾기
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내기

[입력 설명]
첫번째 줄에 문자열, 두번째 줄에 문자가 주어진다.
[출력 설명]
해당 문자의 개수를 출력한다.
*/

//내 풀이:문자열 순회하면서 주어진 단어와 같으면 answer의 값을 +1 시킴
function solution(string,word){
    let answer = 0; //answer초기화
    for(str of string){
        if(str === word){
            answer += 1;
        }
    }
    return answer
}

console.log(solution('COMPUTERPROGRAMMING','R'))


//더 좋은 풀이!!!
function solution2(string,word){
    let answer = string.split(word).length - 1;
    return answer
}
/*
문자열을 split()메소드를 이용해서 주어진 단어(R)을 기준으로 자르면 문자열이 조각난다.
예를들면 'COMPUTERPROGRAMMING'에서 'R'을 기준으로 자르면 ['COMPUTE,P,OG,AMMING']으로 총 3번 잘려서 4조각이 됨.
그러니까 split으로 문자열을 자르고 리턴값에서 -1을 하면 문자열이 몇 개인지 더 쉽게 알 수 있다.
 */
