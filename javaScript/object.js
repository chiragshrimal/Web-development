// object ko exess krne ke liye . operator ka use krte hai 
// or nameofobect['name of id '] se bhi exess kar skte hai 

// creating object 

let obj ={id:101 ,name:"chirag",salary:10000 };
// yha id is key and 101 is a value 
console.log(obj);

let emp=new Object();
emp.id=102;
emp.name="sam"
console.log(emp);

// create object using fuction constructor
function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}

const e=new Emp(103,"aryan",120000);
e.id=2;
console.log(e);

// naya key valuue assign karne ke liye
// ya existing id/key ko uodate krne ke liye 
emp.salary=1300;
console.log(emp);

// ydi key-value pair ko delete krna hai 
delete emp.id;
console.log(emp);

// object methord

// exess all the keys 
let keys= Object.keys(emp);
// string ke form m keys aayegi 
console.log(keys);

let values =Object.values(emp);
// values apne data type m hi aayegi 
console.log(values)

// if we want to seperate key value pair 
const entries=Object.entries(emp)
console.log(entries)
console.log(entries[0][0])

// ydi ham chahte hai ki emp object m koi new key value pair add na ho and update bhi na kar paau

// Object.freeze(emp);
emp.id=200;
emp.salary=20000;
console.log(emp);


// ydi hme update allow krna hia toh and new entries allow nhi krni hai toh and delete bhi nhi kar skte hai
Object.seal(emp);
emp.salary=3000;
delete emp.name
console.log(emp);


// ydi aap kisi object  ko kisi dusre object m copy krna chahte hai than

let newobj=Object.assign({x:16},emp);
console.log(newobj);

// 
// check element present or not
console.log(emp.hasOwnProperty('name')); // true
console.log(emp.hasOwnProperty('salary')); // false