// you have to count occurences of the word in the string 

let string ="pw is the best platform for study . pw recently lanchause some courses which are good quality and affordable price . litterally pw is the best "

let word="pw";

function countOccurences(string ,word){
    let flag="g"
    let regex=RegExp(word,flag);
    let myMap=new Map();
    myMap.set(word,string.match((regex)).length);
    return myMap
}

console.log(countOccurences(string,word))

let arr=[1,2,3,4];
let mini=Math.min(...arr)
let maxi=Math.max(...arr)
console.log(mini,maxi)