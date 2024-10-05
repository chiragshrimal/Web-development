// sbse phle execution context bnta hai 
// usme 1. code ,2. memory hoti hai 
// first code ka simple scan hota hai 
// code m variable phle undefined hota hia and jese hi unka execution hota hai memory m tab unki values acutual jo tho wo aati hai 
// and execution context call stack m aata hai 
// functio ko bhi ese ke ese hi code m rakh diya jata hai 
//function ke execution ke liye new execution context bnta hai

let a=1;
let b=2;
one();
two();
function one(){
    console.log("hello",a);
}
function two(){
    console.log("hello",b);
}
console.log("end");