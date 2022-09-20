let user = {
    name: "def",
    age: 25
}
let user1 = Object.create(user); /*The Object.create() method creates a new object, 
                            using an existing object as the prototype of the newly created object. */
user1.name = "ghi";
user1.age = 26;
console.log(user); //{ name: 'def', age: 25 }
console.log(user1);//{ name: 'ghi', age: 26 }
