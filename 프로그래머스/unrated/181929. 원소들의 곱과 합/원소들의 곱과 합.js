function solution(num_list) {
    var answer = 0;
    let a=1;
    let b=0;
    for(let i=0; i<num_list.length; i++){
        a=a*num_list[i];
        b+=num_list[i]
    }
    if(a<b*b)return 1
    else return 0
    return answer;
}