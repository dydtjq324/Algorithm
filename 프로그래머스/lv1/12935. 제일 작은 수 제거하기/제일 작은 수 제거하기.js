function solution(numbers) {
    numbers.splice(numbers.indexOf(Math.min(...numbers)),1)
     if(numbers.length===0)return -1
     return numbers
}