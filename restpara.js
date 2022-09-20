//arrays

let arr = ["first", "last", "age"]
let[n1, ...rem] = arr;
console.log(n1);//first
console.log(rem);//[ 'last', 'age' ]

//objects 
let obj = {
    name: "rahul",
    age : 30,
    id: 1001
}
let{name, ...remval} = obj;
console.log(remval); //{ age: 30, id: 1001 }