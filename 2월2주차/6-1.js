/*6-1.올바른 괄호(스택)


[입력설명]
첫 줄에 첫번째 S문자열이 입력되고, 두번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

ex)
bacaAacba
abc

[출력설명]
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

ex)
3

풀이:여는 괄호면 push, 닫는 괄호면 pop을 한다. 올바른 괄호라면 괄호 순회 후 빈 스택이 남을것이다.
*/

function solution(arr){
    let answer = 'YES';
    let stack = []

    for(let x of arr){
        if(x === '(') stack.push(x)
        else{
            if(stack.length === 0) answer = "NO"
            stack.pop() //pop은 마지막 요소를 제거함.
        }
    }

    if(stack.length > 0) answer='NO'

    return answer;
}

//'NO'
let arr='(()(())'
console.log(solution(arr))

