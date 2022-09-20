var a = 90;
function f() {
    console.log(a); //90
}
f();

var b = 900;
function f1() {
    var b = 9000;
    console.log(b); //9000
}
console.log(b); //900
f1();