// heigher order function m jo function as a argument pass krte hai use callback khte hai

// js is single threaded language  in case of native sintax uses means line to line execution hoga 
// parallel execution nhi hota hai 

// kuch ese sintax hote hai jo native nhi hote hai 
// jinhe run time enviournment handle krta hai 
// us case m execution alg trh se hota hai 
// timer wgr ko run enviournment triggger krta hai
// put into the queses 
// event loop continuesly checking the call stack empty or not and execution of code complete or not 
// if both are empty then queses m wait krne wale function ka number aata hain



// asynchronization code 

console.log("start")

// agar bhut saare timeout ho toh jo sbse kam wala hota hai phle aayega 
setTimeout(function(){
    console.log("time done 1");
},2000);

for(let i=0;i<1000000000;i++){}

setTimeout(function(){
    console.log("time done 2")
},3000)

setTimeout(function(){
    console.log("time done 3")
},5000)


console.log("end")

// disadvantage of callback  function

// 1. readebility 
// nested heigher order function honge toh dikkat hogi readebility m 
// 2. inversion control problem 
// callback function ka control kisi or function ko de diya 
// means function ko kisi dusre function m bhejne par pta nhi kya hi hoga 

