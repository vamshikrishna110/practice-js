let products = [
  {name: "toys", id: 1001, price: 500},
  {name: "shirts", id: 1002, price: 2000},
  {name: "shoes", id: 1003, price: 2500},
  {name: "electronics", id: 1004, price: 5000},
  {name: "bbq", id: 1005, price: 700},

];

const filterproducts = products.filter((product => product.price > 1000));
console.log(filterproducts);
//=========================================================================================
products.sort((a,b) => {
        let a1 =  a.price  - b.price;
        return a1
        
})
console.log(products)



