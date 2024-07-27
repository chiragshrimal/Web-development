// conditions and loops 

let age =19;
if(age>=18){
    console.log("you aree eligible")
}else{
    console.log("ypu are not eligible")
}

let signal="red";
if(signal=="red"){
    console.log("red=>STOP");
}else{
    if(signal=="yellow"){
        console.log("yellow=>GO SLOW")
    }else{
        if(signal="Green"){
        console.log("Green->GO FAST")
        }else{
            console.log("Invalid")
        }
    }
}

// switch case

let user="Admin"
switch(user){
    case "Admin":
        console.log("he is Admin");
        break;
    
    case "Student":
        console.log("he is student")    
        break;

    case "Mentor":
        console.log("he is Mentor")
        break;
        
    default:
        console.log("Invalid");
        break;    
}

// loops 
// 1. do while
//  2.while
// 3. for

for(let i=0;i<5;i++){
    console.log(i);
}

// while(init,condition,increment) loops

let i=0;
while(i<5){
    console.log(i);
    i++;
}

// do while
// always ek bar chalta hai 
let j=0

do{
    console.log("hello world")
    j++;

}while(j<5);

// ternarry operator /ternary condition
// condition?true:false;
let isloggedIn=false;
isloggedIn?console.log("HomePage"):console.log("login page ");