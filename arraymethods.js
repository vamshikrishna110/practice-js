//array declaration 
let arr = []
let arr1 = new Array()

let arr2 = ["one", "two", "three"]
//replace the element
arr2[2] = "four"
//add new value to array
arr2[3] = "five"
console.log(arr2) //[ 'one', 'two', 'four', 'five' ]

//pop push shift unshift
//pop removes last element and shift removes first element
arr2.pop()
console.log(arr2) //[ 'one', 'two', 'four' ]

arr2.shift()
console.log(arr2) //[ 'two', 'four' ]

//push method add value to end of array and unshift methods add value to first of array

arr2.push("six")

arr2.unshift("zero")

console.log(arr2) //[ 'zero', 'two', 'four', 'six' ]

//every method checks each value in array and return true or false based on condition 
//if in array every value is true it returns true if anyvalue is false it returns false

const ages = ["10", "20", "30", "40"]
ages.every(checkage)

function checkage(ages) {
    console.log( ages> 18); //false
}

// The fill() method fills specified elements in an array with a value

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits) //[ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]
console.log(fruits.fill("Kiwi", 2, 4)); //[ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]

//filter method check condition and print values

const agess = [32, 33, 16, 40];
const result = agess.filter(checkAdult);
console.log(result); //[ 32, 33, 40 ]
function checkAdult(age1) {
    return age1 >= 18;
}

//map() calls a function once for each element in an array.

//map() creates a new array from calling a function for every array element.


const values = ["1", "2", "3", "4", "5"]
const output = values.map(myfunc)

console.log(output) //[ 10, 20, 30, 40, 50 ]

function myfunc(values) {
    return values * 10;
}

//The reduce() method executes a reducer function for array element.


let values1 = [1, 2, 3, 4, 5]

function funcVal(total, num) {
    return total + num
}

let output1 = values1.reduce(funcVal)
console.log(output1); //15


//The slice() method returns selected elements in an array, as a new array.

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1, 3); //[ 'Orange', 'Lemon' ]

console.log(citrus)

//The splice() method adds and/or removes array elements.
//add
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

//2 add at 2nd index 0 wont remove anything
//removes
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits3.splice(2, 2);
console.log(fruits3) //[ 'Banana', 'Orange', 'Kiwi' ]