function createCard(tittle,cName,view,monthsOld,duration,thumbnail){
    let viewStr;
    viewStr=view;
    if(view >1000 &&  view<1000000){
        viewStr=view/1000 +"K"
    }else{
        if(view>1000000){
            viewStr=view/1000000 +"M";
        }
    }
    let html=`<div class="card">
             <div class="imag">
            <img  src=${thumbnail} alt="harry" width="180px" height="150px">
            <div class="capsule">${duration}</div>
        </div>
        <div class="tittle">
            <h1>${tittle}</h1>
            <div class="other">
                <div class="cName">${cName}</div>
                <div>${viewStr}</div>
                <div>${monthsOld} months ago</div>
            </div>
        </div>
        </div>`
        document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML+html
}

createCard("JS CONCEPTS | CHALLENGES #1","code with harry",72000000,3,"31:02","https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A");
createCard("OOPS CONCEPTS | CHALLENGES #2","code with harry",727000,2,"30:00","https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A");