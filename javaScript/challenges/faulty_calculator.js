/*
we have to make faulty calculator
which take two input from user 
and perform following operation  

1. +-------> -
2. * -------> +
3. - -------> /
4. / -------> **

if perform following operation 105 of the time 
*/
let a=prompt("enter first number")
let b=prompt("enter second number")
let c=prompt("enter operatipon")


function faultyCalculator(a,b,c){
    let temp=Math.random()
    a=Number(a)
    b=Number(b)
    if(c=='+'){
        if(temp<=0.1){
            alert(a-b);
            return;
        }
        alert(a+b);
    }
    if(c=='*'){
        if(temp<=0.1){
            alert(a+b);
            return;
        }
        alert(a*b);
    }
    if(c=='-'){
        if(temp<=0.1){
            alert(a/b);
            return;
        }
        alert(a-b);
    }
    if(c=='/'){
        if(temp<=0.1){
            alert(a**b);
            return ;
        }
        alert(a/b);
    }
}

faultyCalculator(a,b,c);