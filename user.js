let user = {
    name: "jjj",
    age: 23,
};

for(key in user) {
    console.log(key.value); //undefined
    console.log(user[key]); // jjj, 23
}
