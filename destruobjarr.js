let arr = ["john", "smith"]; //destructing the array
let [first, last] = arr
console.log(first) //john
console.log(last) //smith

 let arr1 = ["john", "smith", "rahul", "ajay"]; //ignoring the names using commas
 let [name1,,, name2] = arr1;
 console.log(name1);//john
 console.log(name2);//ajay

 let arr2 = ["john", "smith", "rahul", "ajay"]; //rest parameters
 let [n1, n2, ...remnames] = arr2;
 console.log(n1); // john
 console.log(n2);//smith
 console.log(remnames);//[ 'rahul', 'ajay' ]


 let obj = {
    namee: "ajay",
    age: 30,
    id: 1001
 }
 let {namee, age, id} = obj;//object destructing
 console.log(namee); //ajay
 console.log(age); //30
 console.log(id);//1001

 let items = {  // nested destructin
    size: {
        width: 100,
        height: 200
    },
    itemss: ["Cake", "Donut"],
 }

 let{size, itemss} = items;
 console.log(size); //{ width: 100, height: 200 }
 console.log(itemss)//[ 'Cake', 'Donut' ]