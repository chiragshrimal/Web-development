class product{
    // property->variable->data member
    // name;
    // price;
    // rating;

    // jab bhi object create krte hai constructor call hota hai 
    constructor(n,p,r){
        // console.log("Hii brooo")
        this.name=n
        this.price=p
        this.rating=r
    }

    // behaviour->function member function
    // sarre ke ke saare objects m sam esame hoga 

    Display(){
        // console.log("hellooo")
        console.log(this)
    }
}

// let obj={}
// obj.name="chirag"
// obj.id=3
// console.log(obj)

const p=new product("iPhone",200000,4.3);// new-> creates empty palin object 
console.log(p)

p.Display();