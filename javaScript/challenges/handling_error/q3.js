class Car{
    company
    Model
    year


    // get description 
    getDescription(obj){
        console.log("This is a" + this.year ,this.company ,this.Model)
    }
}

let obj=new Car();
obj.company="cisco";
obj.Model=2020;
obj.year=2024;
obj.getDescription();