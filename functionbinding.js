let user = {
    firstName: "John",
    sayHi() {
     console.log(`Hello, ${this.firstName}!`); // hello undefined
    }
  };
  
  setTimeout(user.sayHi, 1000);
  // it sets this=window for the function call (for Node.js, 
  //this becomes the timer object, but doesn’t really matter here)
  //So for this.firstName it tries to get window.firstName,
  // which does not exist. In other similar cases, usually this just becomes undefined.

  //solution 1 using wrapper function

  let user1 = {
    firstname1: "john",
    sayHi() {
        console.log(`Hello ${this.firstname1}`) //hello john
    }
  };
  setTimeout(function() {
    user1.sayHi();
  }, 1000);

  //it receives user from the outer lexical environment, 
  //and then calls the method normally.

  //or 
//   setTimeout(() => user.sayHi(), 1000);

let user2 = {
    firstName2: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(() => user2.sayHi(), 1000);
  
  // ...the value of user changes within 1 second
  user2 = {
    sayHi() { 
        console.log("Another user in setTimeout!");
     } //output because user is changed after settimeout
//to fix this solution we use bind
  };

  //solution 2 bind

  let user3 = {
    firstName3: "john"
  };

  function func() {
    console.log("binding " + this.firstName3); //binding john
  }

  let funcuser = func.bind(user3);
  funcuser();

  //Here func.bind(user) as a “bound variant” of func, with fixed this=user.
