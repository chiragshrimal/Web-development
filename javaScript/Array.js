// creating array
// array is a collection of heterogeneus element 
let a=[1,2,34,5,"chirag"];
console.log(a);

let b=new Array("chiarg","abc","shrimal");
console.log(b);

// axess element of array

console.log(a[4])
// apdate element
a[3]=3;
console.log(a);

let arr=[1,2,3,4,5];
// add element at last
arr.push(10,11)/// we can push more  than on element 
console.log(arr)

// remove element from last endex
// ye element bhi return krta hai 
arr.pop();
console.log(arr)

// remove from first index
// and also element bhi return krta hai
let element=arr.shift();
console.log(element)
console.log(arr)

// add element at first index
arr.unshift(5,9);
console.log(arr)

let a1=[1,2,3]
let a2=[5,6,7]
// add to array
let a3=a1.concat(a2);
console.log(a3)

// convert array to string
let s=a3.join("")//join ke ander wo dete hai jo elements ke bich hona chahiye 
console.log(s)

// reverse the array
a3.reverse();
console.log(a3);

//find index of any element
// agar element present nhi hai than return -1;
console.log(a3.indexOf(4))


// ydi array ka kuch continuous part fatch krna hai tab

let arr1=[1,2,3,4,5,6]
console.log(arr1.slice(2,5))// start ib=ndex se last -1  tak ke index ke element deta hai

// kisi bhi index par element ko add krna ho to 

arr1.splice(2,2,11,12);// phla kis index pe , dusra kitne elemet ko , tisra,forth,fifth.... kis ko insert krna hai 
console.log(arr1);









