function solution(n, m) {
    var answer = [];
    let min;
    for(let i=1; i<=Math.min(n,m); i++){
        if(n%i===0 && m%i===0){
            min=i
        }
    }
    answer.push(min);
    let a=Math.min(n,m);
    while(true){
        if(a%n===0 &&  a%m===0){
            answer.push(a);
            break;
        }
        a++;
    }
    return answer;
}