function solution(x) {
    let sum=0;
    let tmp=x;
    while(tmp){
        sum += tmp%10;
        tmp=Math.floor(tmp/10)
    }
    if(x%sum===0)return true
    else return false
}