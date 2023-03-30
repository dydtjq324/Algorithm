function solution(arr) {
    let sum=0;
    for(let x of arr){
        sum+=x;
    }
    return sum/arr.length;
}