let  map = new Map();
map.set("1", "str1");
map.set(2,"num1");
map.set(true, "bool");
console.log(map);//Map(3) { '1' => 'str1', 2 => 'num1', true => 'bool' }
console.log(map.get("1")); //str1
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

//weakmap
//let john = {name1: "john"};
// let arr = [john]
// john = null;
// console.log(john);
//// the object previously referenced by john is stored inside the array
// therefore it won't be garbage-collected
// we can get it as array[0]
//similarly we can use map also we get the same output as above 

//WEAKMAP
let john = {name1: "john"};
let weakmap = new WeakMap();
weakmap.set(john, "hello") //pass the object  not nonprimitivies types
console.log(weakmap.get(john));
john = null;
console.log(weakmap.get(john));
// Compare it with the regular Map example above.
//  Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

//WeakMap has only the following methods:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)