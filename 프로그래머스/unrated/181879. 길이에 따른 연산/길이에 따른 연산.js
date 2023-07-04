function solution(num_list) {
    var answer = 0;
    let a=num_list.length
    if(a>10){
       answer= num_list.reduce(
  (accumulator, currentValue) => accumulator + currentValue)
    }
    else answer=
        num_list.reduce(
  (accumulator, currentValue) => accumulator * currentValue)
    return answer;
}