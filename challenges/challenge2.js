
// create a business name generator by conmbining list of adjectives and shop nam eand another word

// Adjectives;
// crazy
// Amazing
// Fire


// shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub

let Adjectives=Math.random();
console.log(Adjectives)
let name1;
let name2;
let name3;
if(Adjectives<0.3){
    name1="crazy";
}else{
    if(Adjectives<0.6){
        name1="Amazing";
    }else{
        name1="Fire";
    }
}

let shopName=Math.random();

if(shopName<0.3){
    name2="Engine";
}else{
    if(shopName<0.6){
        name2="Foods";
    }else{
        name2="Garments";
    }
}

let word=Math.random();

if(word<0.3){
    name3="Bros";
}else{
    if(word<0.6){
        name3="Limited";
    }else{
        name3="Hub";
    }
}

console.log(name1 +" "+name2+" "+name3);