/*3.숫자만 추출
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
만약 'tge0a1h205er'에서 숫자만 추출하면 0,1,2,0,5이고 이것을 자연수를 만들면 1205가 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
*/

/*내 풀이:
1)문자열에서 정규표현식을 이용해 숫자가 아닌 문자들을 공백으로 대치하여 숫자만 있는 문자열을 만든다. => replace(/[^0-9]/g,'')
2)문자열을 정수로 바꾼다. parseInt() 이용.
*/
function solution(string){
    let answer = Number(string.replace(/[^0-9]/g,''))
    return answer
}

let string1 = 'tge0a1h205er'
let string2 = 'g0en2T0s8eSoft'
console.log(solution(string2))

/* 다른 방법:parseInt를 쓰지 말라고 제한을 걸 수도 있는데 그럴 때 사용할 수 있는 방식 + isNaN()메소드와 for문을 사용하는 방법
1)isNan()이라는 메소드를 이용해서 해당 문자가 숫자인지 아닌지 확인 가능. Not a Number의 줄임말, 문자에 해당하면 true를 반환.
2)이를 이용해 문자열을 순회하면서 isNan 결과가 false이면 해당 문자를 answer에 추가하고, ParseInt()로 정수로 변경.
어차피 내 풀이나 for문 풀이나 다 문자열을 순회하기 때문에 시간복잡도는 둘 다 O(n)임.
*/

function solution2(string){
    let answer = 0
    for(let x of string){
        if(!isNaN(x)) answer=answer*10+Number(x)
        /*answer 동작방식-0208 예시:
        answer*10
        -> 0을 만나면(answer가 0인 상태에서 *10)
            => +Number(x) => 0이면 0
        -> 2을 만나면 0(answer가 0인 상태에서 *10)
            => +Number(2) => 0+2 = 2
        -> 0을 만나면 20(answer가 2인 상태에서 *10)
            => +Number(0) => 20+0 = 20
        -> 8을 만나면 200(answer가 20인 상태에서 *10)
            => +Number(8) => 200+8 = 208
        */
    }
    return answer;
}
