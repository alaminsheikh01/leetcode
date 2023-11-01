function countDown(n){
    // for(let i = n; i > 0; i--){
    //     console.log(i)
    // }
    console.log(n)
    n--;
    if(n > 0){
        countDown(n)
    }
}


countDown(10)


function sumOfNumber(n){
    if(n < 0) return 1;
    console.log(n)
    return n + sumOfNumber(n-1)
}

console.log(sumOfNumber(10))