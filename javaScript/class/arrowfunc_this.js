const product=(n,p,r)=>{
    this.name=n;
    this.price=p;
    this.rating=r;
}
// in the arrow function this keyword  not support 
// it check that above this keyword exist or not 
// ans will give bases on the above declartion 
const p= new product("iPhone",200000,3)
console.log(p)