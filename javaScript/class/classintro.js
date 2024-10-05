// class is like blueprint 
// using class we can create many objects
class product{
    // by default public hota hai
    // property->variable->data member
    // name;
    // price;
    // rating;
    #name;
    // jab bhi object create krte hai constructor call hota hai 
    constructor(n,p,r){
        // console.log("Hii brooo")
        // this keyword in js diff than other languages 
        // this keyword refers to the context from where we called **********************
        this.#name=n
        this.price=p
        this.rating=r
        // if u dont return anything it will return object refferced by this
        // return 10;  if u are  returning  premitive then it will avoided by constructor
        // return {x:10}   if u are returning non-premitive then it will return by constructor
    }

    // in js we can not create another constructor

    // behaviour->function member function
    // sarre ke  saare objects m same same hoga 
    
    Display(){
        // console.log("hellooo")
        console.log(this)
    }

    // static mathord \
    // static ka use tab krte hai jab hme object bnane se phle kuch kam krna hota hai 
    // like connection buid krna etc.
    static custom(){
        console.log("hello");
    }
    // if we want to exess private data member
    // we can use inbuild function get and set 

    get nameGetter(){
        console.log(this.#name);
    }

    set nameSetter(n){
        this.#name=n;
    }
}
// let obj={}
// obj.name="chirag"
// obj.id=3
// console.log(obj)

let  p=new product("iPhone",200000,4.3);// new-> creates empty palin object 
// name nhi aayega because private kar diya hai 

// undefiend aayega 
// console.log(p.name)
// p.name="realme"
// console.log(p.name)
// static function ko object se call nhi kar skte hai 
// ise class se hi call kar skte hai 
// p.custom();

product.custom();

p.Display();

// is trh se hm getter ar setter ko call kar skte hai 
p.nameGetter;

p.nameSetter="chirag";


// p.Display();