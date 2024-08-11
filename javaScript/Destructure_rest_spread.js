// array / function / object  all are object 
// spread operator
// spread kar do 

let arrayOne=[1,2,3]
let arrayTwo=[4,5,6]

// let arrayThree=arrayOne.concat(arrayTwo);
// console.log(arrayThree)

// is trh se nhi krte hai 
// let arrayThree=[arrayOne,arrayTwo]
// console.log(arrayThree)


// ... ye rest or spread m se konsa hoga dependes on situation 
// ...arrayOne=1,2,3 // spread ho gya 
let arrayThree=[...arrayOne,...arrayTwo]
console.log(arrayThree)


// rest operator 
// array m bandhta hai 

// Array.form(arr/string)
// iske ander jo bhi likha hai use array ke form m convert kar deta hai 
function manyArray(){
    // arguments object hota hai 
    let args=Array.from(arguments)
    let finalArray=args.map((e)=>2*e)
    console.log(finalArray)
}


// yha ... rest operator ki trh kam kar rha hai 
function manyArray2(...args){
    // yha args array hota hai 
    // rest operator hai 
    // console.log(args)
    let final=args.map((e)=>e)
    console.log(final);
}

// manyArray(1,2,3,4)
// manyArray2(5,6,7,8,9)


// some example 

const name1 =["chirag","shrimal"]
// ... yha par bhi spread ka kam kar rha hai
const name2=["palasha","shrimal",...name1];
console.log(name2)

const siteName="color"
// ... spread ka kam kar rha hai
console.log([...siteName])


// ... rest ka kam kar rha hai 
function pwSkill(...values){
    return values
}
console.log(pwSkill("chirag","shrimal"))


// set 
// set is collection of heterogenous element 
// object hi hota hai 
// collection of unique element  and elements are ordered

let newSet= new Set();

console.log(newSet.size)

// add element in the set
// newSet.add(1)
// console.log(newSet)

// using array
let arr=[1,2,3,4,5]
let myset=new Set(arr)
console.log(myset)

// check element present or not 
console.log(myset.has(1))


// remove element 
myset.delete(6)
console.log(myset)


// myset.forEach((ele)=>{
//     console.log(ele)
// })

// myset.clear();
// console.log(myset)

for (const element of myset) {
    console.log(element)
}


// set difference 

function setDifference(setA,setB){
   return new Set( [...setA].filter((ele)=>!setB.has(ele)))
}
let setA=new Set([1,2,3,4,5])
let setB=new Set([2,4,5])
let ans=setDifference(setA,setB);
console.log(ans);




// map in js 
// yha map ko index se exess krne ki koshikh shi nhi hai 
// unique key hoti hai 

// add element 

let myMap= new Map();
myMap.set(1,"a")
myMap.set("2","b")
myMap.set("3","c")
myMap.set("c","4")
myMap.set("3","5")

// size
console.log(myMap.size)

// delete
myMap.delete("1")

// clear
// myMap.clear();

let arrr=[[1,"d"] ,[2,"f"] ]
arrr.map((ele)=> myMap.set(ele[0],ele[1]))
console.log(myMap)
