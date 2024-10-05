function createPromise(){
    return new Promise(function exec(resolve,reject){
        // your code is here
        setTimeout(function f() {
            console.log("timer is Done")
            reject("done")
        },3000)
    })
}

console.log("start")
// asynchronus code ko bind krna ke like 
async function consume(){
    try{
    console.log("hello");
    // await ka acess async m hi kr  skte hai
    // await jase hi call hota hai wese hi functiomn ke bahr throw krta hai 
    const promises=await createPromise();
    const promise1=await createPromise();
    console.log("bye");
    }catch(err){
        console.log("handeled",err)
    }
}
consume()
console.log("end");

// we can fech the data using below
// fetch give promises 
// fetch("http://type.fit/api/quotes")
// .then(function f(response){
//     return response.json();
// }).then(function f(value){
//     console.log(value);
// })