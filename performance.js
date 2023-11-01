
// normal function and normal way it should be Big O(n)
function sumOfAll(n){
    let total = 0;

    for(let i = 0; i <= n; i++){
        total +=i;
    }
    return total;
}

// better way
function sumOfAll(n){
    return n * (n+1)/2;
}

console.log(sumOfAll1(5))
let time1 = performance.now()
console.log(sumOfAll(100))
let time2 = performance.now()

console.log(time2-time1)
 