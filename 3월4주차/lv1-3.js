//프로그래머스 Lv1. 신규 아이디 추천
//replace(pattern,교체값) : 어떤 패턴에 일치하는 부분을 두번째 인자로 교체한다. 패턴은 정규식 또는 문자열로 줄 수 있다.
//slice(start,end) : 문자를 start인덱스부터 end-1인덱스까지 자른 새 배열을 만든다. 
//str.charAt(index) : 해당 인덱스 위치에 있는 문자열을 반환
//str.repeat(count) : 문자열을 주어진 횟수만큼 반복해 붙힌 새로운 문자열을 반환 
function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '') //word(\w),-,_,.을 제외한(^) 모든(g)문자를 ''로 치환(=제거)
        .replace(/\.{2,}/g, '.')// .이 2개이상{2,}으로 연속되는 모든 문자를 '.'으로 치환
        .replace(/^\.|\.$/g,'')//마침표가 처음이나 끝에 있으면 제거, or == |
        .replace(/^$/,'a') //시작(^)과 끝($)만 존재하면 빈문자열, 'a'로 치환 
        .slice(0,15).replace(/\.$/,'') //slice로 16개를 자른다. 자른 문자의 마지막이 .이면(\.$) 없앤다. 
    
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); //answer가 이하라면 문자열 마지막에 위치한 문자를 charAt()으로 받아와, repeat()으로 주어진 횟수만큼 반복해 붙힌다.
}
console.log(solution("z-+.^."))