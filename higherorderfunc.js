//a function that accepts functions as a parameters and/or returns a function
//eg filter(), map(), reduce(), etc..

function calculate(numbers) {
    let sum = 0;
    for(const num of numbers) {
        sum += num
    }
    return sum;
}

console.log(calculate([1, 2, 3]));//6

