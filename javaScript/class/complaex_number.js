class ComplexNumber{
    #real
    #img

    constructor(real,img){
        this.#real=real;
        this.#img=img;
    }

    display(){ 
        console.log(this.#real, " + i",this.#img);
    }

    get real(){
        return this.#real;
    }

    get img(){
        return this.#img;
    }

    addCompleNumber(c){
        this.#real+=c.real;
        this.#img+=c.img;
    }
}

let c1=new ComplexNumber(2,3);
c1.display();

let c2=new ComplexNumber(5,7);
c2.display();

c1.addCompleNumber(c2);
c1.display();

