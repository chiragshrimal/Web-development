function createPsomise(){
    return new Promise((resolve,reject)=>{
        let randomTime=1+6*Math.random();
        setTimeout(() => {
            resolve();
        },randomTime*1000);
    })
}

async function main(){

    // setInterval continuously run krta hai 
let t=setInterval(() => {
    let last=document.body.getElementsByTagName("div");
    last=last[last.length-1];
    if(last.innerHTML.endsWith("...")){
        last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3);
    }else{
        last.innerHTML=last.innerHTML+".";
    }           

}, 100);

let arr=[ "initialized  hacking now reading your data",
    "Reading your files",
    "password file detected",
    "sending all possword and personal files to server",
    "Cleaning up"]



    for (const element of arr) {
        await createPsomise();
        let div=document.createElement("div");
        div.innerHTML=element;
        document.body.append(div);
    }
    await createPsomise();
    // clear krta hai setInterval ko 
    clearInterval(t);
}

main();
