
let btnEl = document.getElementById("btn");
 btnEl.onclick = function(){
    let anss = document.getElementById("ans");
    let x = document.getElementById("num");
    //console.log(x.value);
    if(x.value) {
        anss.textContent = "entered number: " + x.value;
    }else{
        anss.textContent = "please enter  the number"
    }
    
}
