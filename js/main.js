"use strict";

// let x = 1;
// for(let i=1; i<100000000; i++){
//     x *=i;
// }

function showMessage(){
    document.getElementById('content').innerHTML = "This is new content"
}

function elementOver(elem){
    console.log(elem);
    console.log("mouse over element");
    elem.style.backgroundColor = "#e67e22";
}

function elementOut(elem){
    console.log(elem);
    console.log("mouse out element");
    elem.style.backgroundColor = "#9b59b6";
}

let countClick = 0;
function counterIncrease(){
    countClick++;
    console.log(countClick);
}

// document.onload = counterIncrease();

