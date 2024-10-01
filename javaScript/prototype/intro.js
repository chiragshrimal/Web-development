// string ,array , function , set, objects ,map all are objects 

let myHeroes=["chirag","rahul","ram"]

let dcHeroes=["batman","perman"];

let heropower={
    thor: "hammer",
    spiderman:"sling",

    getSpidermanPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }

}

// jinka prototype object hai unme chirag name ka method bna diya 
// ab directly exess kar skte hai 
Object.prototype.chirag=function(){
    console.log("hello i am chirag");
}

Array.prototype.arr=function(){
    console.log("this is for you");
}



// dcHeroes.arr()

// because object ka prototype object hi hota hai Array nhi hota hai
// heropower.arr();


// inheritance 

const user={
    name : "chirag",
    email : "chirag1711shrimal@gmmail.com",
    id :456
}

const teacher={
    makeVideoes :true
}

const TeachingSupport={
    isAvailable :true
}

const TAAssistance={
    makeAssignment : "jsAssignment",
    fullTime : true,
    // phle se hi hota hai __proto__ key har object m 
    // TAAssistance inheritace the properties of TeachingSupport
    // methord 1
    // __proto__:TeachingSupport
}
//methord 2

// teacher.__proto__=user;

// methord 3

// teaching support uses the property of TAAsistance 
Object.setPrototypeOf(TeachingSupport,TAAssistance);

console.log(TeachingSupport.fullTime);


// calculate actual length of the string 

let str="chirag     ";

String.prototype.trueLength=function(){
    console.log(`length of the string ${this.trim().length}`);
}

str.trueLength();



