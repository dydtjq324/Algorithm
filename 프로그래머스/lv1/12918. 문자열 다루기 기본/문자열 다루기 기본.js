function solution(s) {
    var answer = true;
    if(s.length === 4 || s.length === 6){
         for(let x of s){
            if(isNaN(x)) answer=false
        }
    }
    else answer=false
    return answer;
}