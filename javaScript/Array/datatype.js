
// printing in js
console.log("chirag");
console.log("shrimal")
// is key word ki wgh se console m run nhi krna chahiye 
console.log(this)


// values and datatypes 

// primitive data type means basic data type 

//  - number : 2 , 3 , 4 , 4.5 , 24.00435 
//  string : "pw skill" or 'pw skills'

// - boolean : true ,false
//  use case of boolean  in login button'

// -null means nothing/empty not zero 

// -undefiend 
// example 
//  let a; undefined


// non-premitive data type 

// -Array 

let name1="chirag"
let name2="shrimal"
let name3="rohit"
let name4="ram"

// in s=case of java script array can  conatins heterogeneus elemnt
let names =["chirag","shrimal","rohit","ram",2,3,4.5,false]
console.log(names);

// object or browser ke events  ko sikh loge toh kam ho jayega js m 

// -object: {} collection of key value pair


// key words

// i js keword like let ,var ,const etc 
// but hm jyadatar let or const ka hi use krenge 
// var ka use m bhut sare scope problem hai isliye iske use se bache 
// let ka use krne se hm us variable ki value change kar skte hai 
// cost ka use krne se variable ki value change nhi kar skte hai 
// jab bhi app website bnao jyadatar const ka use kro ***
// js loosly bound language hai agr let,cost wgr nhi likhoge toh bhi chalega 
// variable ka name uske kam se rkhna always 
// variable ka name big letter se start nhi krn hai 

let myname ="chirag"
console.log(myname)

myname="shrimal"
console.log(myname);

const yourname="palasha"
console.log(yourname);

// this is not valid because const ki value ko change kar rhe ho error aayegi
// yourname="chirag"
// console.log(yourname)

// q1
// assignment operator
let myscore=30000
console.log("my score is :",myscore);

// q2

let pwCoursePrice=200
let gstOnCourse=36;
let totalCoursePrice=pwCoursePrice+gstOnCourse;
console.log(totalCoursePrice);

// q3
// memory ko bacha skte hai yha code ki cost kam hai 
pwCoursePrice=500
console.log("tota price is :", pwCoursePrice+gstOnCourse);


console.log("answer1 is : ",5%2);// modulus 

console.log("answer2 is :" ,5/2);

console.log(3**2);// power =>**

let hiteshScore=200
let chiragScore="300"
console.log(hiteshScore ==chiragScore)// comparision(==,< ,>.!=)

// === ke case m data type bhi check hota hai
// == m ans true aayega 


//&& || ka use

let isLoggedIn=true
let cardDetails=true
// jab dono true honge tabhi aage jane dunga na 
// && ka use krenge 

let gnailAccount=true;
let emailAccount=false
// dono m se atleast ek bhi true ho tabhi aage jane denga 
// || ka use krenge 


