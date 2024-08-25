// higher order function ko argument m pass bhi kar skte hai 
// or kisi function ke through return bhi kar skte hai 


// arrow function 
const powerTwo=(n)=>n**2

function powerCube(powerTwo,n){
    return powerTwo(n)*n
}

// console.log(powerCube(powerTwo,4))

function sayHello(){
    return ()=>{
        console.log("hello chirag !")
    }
}

let gessvalue=sayHello();
console.log(gessvalue);
gessvalue();


// nested function 
// concept of scope

const heigherOrder= n =>{
    const oneFun= m =>{
        const twoFun= p =>{
            return n+m+p;
        }
        return twoFun;
    }
    return oneFun;
}

// calling of nested function
console.log(heigherOrder(2)(3)(4))


// use case of nested function 

const myNum=[1,2,3,4,5];

const sumarray=arr=>{
    // array ke element ke liye foreach loop hota hai
    let total=0 
    arr.forEach(element => {
        total+=element;
    });
    return total;
}

console.log(sumarray(myNum));


// use case of heigher order function

function oneMoreHello(){
    console.log("hello chirag !");
}

// ye particular interval m kuch kam krta hai 
// yha time milisecond m hota hai 
// setInterval(oneMoreHello,1000)


// ek hi bar kam hoga in --- seconds 
// time is in milisecond 
setTimeout(oneMoreHello,2000)



