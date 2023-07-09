function a(number){
    let tmp=0;
    for(let i=1; i<=number; i++){
        if(number%i===0){
            tmp++
        }
    }
    if(tmp%2===0)return number
    else return -number
}
function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        answer+=(a(i))
    }
    return answer;
}