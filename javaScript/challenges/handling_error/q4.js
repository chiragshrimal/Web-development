class user{
    UserName;
    Password;
    // set password
    setpassword(password){
       try{
        let uppercase=0;
        let num=0;
        for(let i=0; i<password.length;i++){
            if('A'<=password[i]   && password[i]<='Z'){
                uppercase++;
            }
            if(0<=password[i]<=9){
                num++;
            }
        }
        if(num==0 || uppercase==0 || password.length<8){
            throw new Error("invalid password please enter correct password")
        }else{
            this.password=password;
        }
       }catch(error){
        console.log(error);
       }
    }

    // get password
    getpassword(){
        let len=this.password.length;
        let str="";
        for(let i=0;i<len;i++){
            str+="*";
        }
        console.log(str);
    }
}

let obj=new user();
let password="123er";
obj.setpassword(password);
obj.getpassword();
