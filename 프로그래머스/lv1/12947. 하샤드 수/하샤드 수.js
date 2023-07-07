function solution(x) {
    let answer=false
    let sum=0;
    let tmp=x;
    while(tmp){
        sum += tmp%10;
        tmp=Math.floor(tmp/10)
    }
    if(x%sum===0)return true
    return answer
}