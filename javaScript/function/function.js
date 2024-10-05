// phle function ko define karna pdta hai fir bad m call krna pdta hai 
// declaration of the function 
// yha function keyword hai 
// uske bad function ka name hota hai 
function functionName(){
    // function body
    console.log("hi i am chirag")
    console.log("how are you")
}

function sqr(x){// x->parameter
    // console.log(x*x);
    return x*x;
    // agar aapne return toh likha but uske sath kuch return nhi kiya toh ye undefined return krta hai
    // agr aapne function m return hi nhi likha hai tab ye undefined return krta hai
}
// sqr(5);// 5-> argument 
let a=sqr(8);
console.log(a);


functionName();

// passing multiple parameter  in the function

function sum(num1,num2){
    return num1 + num2;
}
let ans=sum(2,3);
console.log(ans);

function sum_number(a,b,c=3){
    return a+b+c;
}
let store=sum_number(2,3);
console.log(store);


// function with unlimited number of parameter

function sumOfAllParemeters(){
    let sum=0;
    for(let i=0;i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;     
}
// saare ke ke saare argument jake argument array bn jata hai 
let answer=sumOfAllParemeters(1,2,3,4,5,6);
console.log(answer);

// Arrow function 
// in the arrow function  unlimited arguments wala concept not define 
// 1. one parameter , and a single return statement 
const squre=(x)=>x*x
ans=squre(9);
console.log(ans);

// 2. multiple parameter ,and a single return expression 
const sumOfTwoNumber=(x,y)=> x+y;
console.log(sumOfTwoNumber(2,5))


// 3. multiple statement in function  expression 
const sumNumber=(x,y)=>{
    console.log("hello");
    return x+y;
}
console.log(sumNumber(2,6))

// if we want to return an object
const sumAndDifference=(x,y)=>({sum: x+y , difference: x-y})
// object ke element ko . se acces krte hai 
console.log(sumAndDifference(2,9).sum)

// Anonymous function 
// in function ka koi name or identity nhi  hoti hai
// isse hm function ko easly dusre function m pass kar skte hai 
// but anonymous function ko debuge krne m kafi problem hoti hai 

let x=function (){
    console.log("hi");
}
x();

// imediately invoked function
// jis time use declare kiya gya hai usi time call bhi kar diya gya hai 

(function exec(){
    console.log("named");
})();
// ab is function ko aage us nhi kar skte hai


// anonymus invoked function  function

(function (x){
    console.log(x*x);
})(5);



//  function Expression like anonyms function 
// function Expression have two type 
// 1. named  function  expression 
// 2. anynomus  function expression 


// self invoked function 
// like iifi functon (imediately invoked function )

