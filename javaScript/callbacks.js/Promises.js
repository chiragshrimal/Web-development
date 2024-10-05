// promises are object which are readability enhancer
// they solves the problem of inversion control 
// app jis bhi function ko call krna chhte ho use higher order function m  bhej hi nhi rhe hote ho 
// placeholder ka bhi kam krta hai  
// jitna bhi achynchronus code hai use promises ke saath bind kar dete hain 
// initially promise ki state pandding hogi 
// and value is undefined 
// after complete the promise then resole or reject m jo value hai vhi promises ki value ho jati hai 
// in case of promises two type of queue is mentained 
// 1. macro queue for callback 
// 2. micro queue for x.then ke callback ke liye 
// event loop after call stack  empty and code done  ke baad first micro queue m se function ko uthata hai 
// agar micro quedue m koi function nhi hia then macro queue m se function uthata hai 
// promises ke callback ka call stack m complete hon ke baad hi x.then ke callback ko micro queue m bheja jata hai 
// promises ki state find krne e liye hi resolve or reject ka use krte hai 
// resolve ke corresponding then ka callback call hota hai 
// reject ke corresponding catch ka callback call hota hai 
// finally toh always execute krta hai 
// like try catch m jis trh se use krte hai 
// then also give the promises

function createPromise(){
    return new Promise(function exec(resolve,reject){
        // your code is here
        setTimeout(function f() {
            console.log("timer is Done")
            resolve("done")
        },3000)
        console.log("hello")
    })
}

console.log("start")
let x=createPromise();
console.log("got promise")
x.then(function (value){//promise ki state fulfuild hone ke baad start hoga 
    console.log("handeled promise");
}).catch(function (value){
    console.log("not handeled ",value)
}).finally(function(){
    console.log("i will always run")
})
console.log("end")
for(let i=0;i<100000000;i++){
    // code is here
}