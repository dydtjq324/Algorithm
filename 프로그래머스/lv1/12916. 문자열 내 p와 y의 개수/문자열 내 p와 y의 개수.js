function solution(s){
    let answer=0;
    s=s.toLowerCase()
    for(let x of s){
        if(x==='p')answer++
        else if(x==='y')answer--
    }
    if(answer===0)return true
    return false
    
   
}