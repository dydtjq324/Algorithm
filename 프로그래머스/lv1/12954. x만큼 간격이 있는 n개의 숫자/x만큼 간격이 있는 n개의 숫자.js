function solution(x, n) {
    var answer = [];
    let tmp=0;
    while(n>0){
        tmp+=x;
        answer.push(tmp);
        n--;
    }
    return answer;
}