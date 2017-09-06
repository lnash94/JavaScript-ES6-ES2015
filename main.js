/**
 * Created by PC on 9/6/2017.
 */
"use strict"
/*
var a='Test1';
let b='Test2';

console.log(b);*/
function testVar() {
    // global
    var a =30;
    if (true){
        // 30->50
        var a = 50;
        console.log(a);
    }
    console.log(a);

}
function testLet() {
// global
    let a =30;
    if (true){
        // 30->50
        let a = 50;
        console.log(a);
    }
    console.log(a);

}

for(var i=0;i<10;i++ ){
    console.log(i);
}

//print 10
//console.log(i);
for(let i=0;i<20;i++ ){
    console.log(i);
}
//error
console.log(i);
testVar();
testLet();




const colors=[];
colors.push('red');
colors.push('green');
console.log(colors);