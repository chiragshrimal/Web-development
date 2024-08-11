// catch always atteched with the try 
// try can exist without catch 
try{
    console.log(val);
}
//catch m variable pass krne se jo bhi error aayi hai wo store ho jata hai 
catch(err){
    console.log("error occured",err)
}
// finally wala code always execute hota hai
finally{
    console.log("hello")
}