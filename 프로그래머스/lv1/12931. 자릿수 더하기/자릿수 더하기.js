function solution(n)
{
    var answer = 0;
    let tmp=n;
    while(tmp){
        answer+=tmp%10;
        tmp=Math.floor(tmp/10)
    }
 

    return answer;
}