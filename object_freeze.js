let user = {
    name: "kvk",
    age: 23
}
 Object.freeze(user);// Object.freeze(user); //Object.freeze() which is used to freeze an object. 
// Freezing an object does not allow new properties to be added to an object and prevents from removing or altering the existing properties. 
user.city = "hyd";
console.log(user);

//=========================================================================
let object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true
});
object1.property1 = 43
console.log(object1.property1); // if writable is false then output = 42 if its is true then output = 43

//==========================================================================
Object.defineProperty(user, 'age', {
    writable: true,  
})
user.age = 75
 console.log(user.age) // if it writable is false the output = 23
//  if writable is true then output = Cannot redefine property: age
// at Function.defineProperty (<anonymous>)
// in case of freeze and define property