/* generate bussisnuss name using three thing
1. Adjective 
a. Crazy
b. Amazing
c. Fire

2. Shop Name 
a. Engine 
b. Foods
c. Garments

3. Another Word :
a. Bros
b. Limited 
c. Hub


Dont use array 
*/

function selectAdjective(){
    let temp=Math.random();
    if(temp<=0.3){
        return "Crazy";
    }
    if(temp>=0.6){
        return "Amazing";
    }
    return "Fire";
}

function seleteShopeName(){
    let temp=Math.random();
    if(temp<=0.3){
        return "Engine";
    }
    if(temp>=0.6){
        return "Foods";
    }
    return "Garments";
}

function selecteWord(){
    let temp=Math.random();
    if(temp<=0.3){
        return "Bros";
    }
    if(temp>=0.6){
        return "Limited";
    }
    return "Hub";
}
function createShopName(){
    let str1=selectAdjective();
    let str2=seleteShopeName();
    let str3=selecteWord();
    const ans=str1 + " " + str2 +" "+ str3
    alert(`${ans}`)
}

createShopName();


