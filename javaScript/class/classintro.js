// class is like blueprint 
// using class we can create many objects
class product{
    // property->variable->data member
    // name;
    // price;
    // rating;

    // jab bhi object create krte hai constructor call hota hai 
    constructor(n,p,r){
        // console.log("Hii brooo")
        // this keyword in js diff than other languages 
        // this keyword refers to the context from where we called **********************
        this.name=n
        this.price=p
        this.rating=r
        // if u dont return return anything it will return object refferced by this
        // return 10;  if u are  returning  premitive then it will avoided by constructor
        // return {x:10}   if u are returning non-premitive then it will return by constructor
    }

    // in js we can not create another constructor

    // behaviour->function member function
    // sarre ke ke saare objects m same same hoga 

    Display(){
        // console.log("hellooo")
        console.log(this)
    }
}

// let obj={}
// obj.name="chirag"
// obj.id=3
// console.log(obj)

// const p=new product("iPhone",200000,4.3);// new-> creates empty palin object 
// console.log(p)





// p.Display();