let pattern="pw";

// difine regex
let regexOne=RegExp(pattern);


// flag ke use se different different type ke pattern find kar skte hai 
// flag m i case sensetive ko handle krta hai 
// i ka use krne se bas match hona chahiye 
let flag="gi"

let regexTwo=RegExp(pattern,flag);

let regrexThree= /pw/gi;

let string ="pW is the best platform . Pwskill is one of the best course till now in the industry . i proud on pw "

// let ask with pattern

// true of flase return krta hai 
let result=regrexThree.test(string)
console.log(result)

// let ask with string 
// return array of string 
let finalResult=string.match(regrexThree);
console.log(finalResult);

 
// replace 
// first parameter is regEXp and second is uski jgh kisko lgana hai 
let replace=string.replace(regrexThree,"p-w")
console.log(replace)

let url="http:// pwskill.com/chirag%20shrimal"

// \d ka use tab krte hai jab aapko us number ke bare m patta hi nhi ho 
let urlResult=url.replace(/%\d\d/," ")
console.log(urlResult)


// ye bhi check kar skte hai ki jo input aaya hai wo email hai ya nhi or credit number hai ya nhi 

// more information on regexr.com  pr hai 

