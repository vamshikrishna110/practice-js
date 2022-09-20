// in javascript a promise is a good way to 
// handle asynchronous operations.

// a promise may have one of three states.
// 1 pending
// 2 fulfilled
// 3 rejected


let count = true;
let countvalue = new Promise(function(resolve, reject) {
    if(count) {
        resolve("there is a count value");

    }else{
        reject("there is no count value");
    }
}) 

console.log(countvalue); //Promise { 'there is a count value' }

// promise chaining


//promise are very useful when you 
// have to handle more than one asynchronous task, 
//one after another  we use promise chaining
//You can perform an operation after a promise is resolved using methods 
//then(), catch() and finally().

// returns a promise
let countValue1 = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue1.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );