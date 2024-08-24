function product(n,p,r){
    this.name=n
    this.price=p
    this.rating=r
    // console.log(this)
    // if u dont return return anything it will return object refferced by this
    // return 10;  if u are  returning  premitive then it will avoided by function constructor
    // return {x:10}   if u are returning non-premitive then it will return by function constructor
}

const p=new product("airbuds",20000,5)
console.log(p)
