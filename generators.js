//Regular functions return only one, single value (or nothing).

// Generators can return (“yield”) multiple values, one after another, on-demand. 
//They work great with iterables, allowing to create data streams with ease.


function* generator() {
    yield 1;
    yield 2;
    return 3
}

let val = generator();
// let one  = val.next();
// console.log(one); //{ value: 1, done: false }

for(let num of val) {
    console.log(num); // 1 2
}
