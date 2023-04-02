function solution(balls, share) {
    return factorial(balls)/((factorial(share))*(factorial(balls-share)))
                            
}

function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i=num; i>=2; i--){
        returnFactorial=returnFactorial*BigInt(i)
    }
    return returnFactorial
}