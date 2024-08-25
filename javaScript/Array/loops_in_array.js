// forEach loop
// kuch function ko array ke under hi inject kar diya hai 

let arr=[1,2,3,5]

// using normal function 
arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})

// using arrow function 
arr.forEach((element,index,arr)=>{
    console.log("arrow :", element,index,arr)
})

// map
// same as forEach

// using normal function
arr.map(function(element,index,arr){
    console.log(element,index,arr);
})

// using arrow function 

arr.map((element,index,arr)=>{
    console.log("arrow",element,index,arr);
})

const  heros =["nagraj","chirag","raj","ritik","salman"];

heros.forEach((element)=>{
    // actual m convert nhi hota 
    console.log(element.toUpperCase());
})


// filters *****

// ydi hme saare ke saare element se matlab nhi hai kuch hi chahiye 
// then we will use filter

const heroWithRaj=heros.filter((h)=>{
    return h.endsWith("raj")
})
console.log(heroWithRaj)


// shopping cart 
const cartBill=[20,30,50];
const sumBill=cartBill.reduce((prev,curr)=> prev+curr,0)
console.log(sumBill)


const gameScore=[100,200,300,310,400]


// check if all values are number 

// typeof string return krta hai
console.log(typeof gameScore[1])
const check=gameScore.every((val)=> typeof val ==="number")

console.log(check)


// find score above 200

// yha find only phle wali value ko hi return krta hai 
const val=gameScore.find((score)=> score>200)
console.log(val)


// find index
console.log(gameScore.findIndex((element)=>element>200));

// some 
// at least one element satisfices condition 
console.log(gameScore.some((element)=> element%2==0))

// sort 
// yha in-place sorting ka use kiya jata hai
gameScore.sort();
console.log(gameScore)
