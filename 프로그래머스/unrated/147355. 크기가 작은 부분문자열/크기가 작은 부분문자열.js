function solution(t, p) {
    var answer = 0;
    let numberP=Number(p)
    for(let i=0; i<t.length - p.length+1; i++){
        let slicedT=Number(t.slice(i,i + p.length));
        if(slicedT<=numberP)
            answer++
    }
    return answer;
}