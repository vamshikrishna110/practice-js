// Lexical scoping defines the scope of a variable 
// by the position of that variable declared in the source code.
//  For example:

// let name1 = 'John';

// function greeting() { 
//     let message = 'Hi';
//     console.log(message + ' '+ name1); // hi john
// }

// greeting();

// According to lexical scoping, 
// the scopes can be nested and the 
// inner function can access the variables declared in its outer scope. 
// For example

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message); //hi
//     }

//     sayHi();
// }

// greeting();

//closures
//In other words, a closure gives you access to an outer function's scope from an inner function. 

function greeting() {
    var message = 'Hiii';

    function sayHi() {
        console.log(message);
    }
    
   return sayHi;
   
}

let hi = greeting();
hi();