// Non-optimized approach
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumNonOptimized = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    sumNonOptimized += array[i];
  }
}



// Optimized approach
const sumOptimized = array.reduce((acc, val) => {
  return val % 2 === 0 ? acc + val : acc;
}, 0);


const time1 = performance.now()
console.log("Non-optimized sum:", sumNonOptimized); // Output: 30
const time2 = performance.now()
const result1 = ((time2 - time1) / 1000)
console.log(result1)

const time3 = performance.now()
console.log("Optimized sum:", sumOptimized); // Output: 30
const time4 = performance.now()
const result2 = ((time4 - time3) / 1000)
console.log(result2)