/*6-4.후위식 연산(스택)
내 풀이:
숫자를 만나면 stack에 푸쉬한다. 문자열을 숫자로 바꿨을때 유효하면 숫자인 조건식을 이용한다.
연산자를 만나면 연산자에 따라 연산을 진행한다. 스택의 가장 끝 숫자 두개를 연산하고 pop한다. 
연산된 결과를 다시 push한다. 
스택에 남은 마지막 수를 answer에 넣는다.
*/

function solution(s){
    let answer = 0;
    let stack = []

    for(let x of s){
        if(parseInt(x)){
            stack.push(parseInt(x))
        }else{
            let tmp = 0;
            switch(x){
                case '+':
                    tmp = stack[stack.length-2] + stack[stack.length-1]
                    break;
                case '-':
                    tmp = stack[stack.length-2] - stack[stack.length-1]
                    break;
                case '*':
                    tmp = stack[stack.length-2] * stack[stack.length-1]
                    break;
                case '/':
                    tmp = stack[stack.length-2] / stack[stack.length-1]
                    break;

            }
            stack.pop()
            stack.pop()
            stack.push(tmp)
        }
    }
    answer = stack[0]
    return answer
}

let s = '352+*9-'
console.log(solution(s))

/*
for문 보완 : rt와 lt를 이용해 pop과 Push를 한방에 해결 가능
+ 숫자인지 아닌지 판별해주는 isNaN()메서드를 이용해 숫자를 판별하는 것도 가능함.
isNaN은 Not a Number의 약자, 숫자가 아니면 true를 반환하고 숫자면 False를 반환한다.

for(let x of s){
        if(!isNaN(x)){
            stack.push(parseInt(x))
        }else{
            let rt = stack.pop() ->pop한 요소가 저장됨
            let lt = stack.pop()
            switch(x){
                case '+':
                    stack.push(lt+rt)
                    break;
                case '-':
                    stack.push(lt-rt)
                    break;
                case '*':
                    stack.push(lt*rt)
                    break;
                case '/':
                    stack.push(lt/rt)
                    break;

            }
        }
    }

 */