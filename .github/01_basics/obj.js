//object literals 

//to add a symbol in the object 
const addr =  Symbol ("city")

 const jsUser ={
    name : "Aditya",
    age : 18,
    [addr]:"Kolkata"//use as a symbol 
 }
/*
 //to access the objects 
 console.log(jsUser.age)
 console.log(jsUser["name"])
 console.log(jsUser[addr]) 
*/

//to overwrite
jsUser.age=21
console.log(jsUser.age)
jsUser.name="Aditya Das"
Object.freeze(jsUser) //now no changes can be done in the object
jsUser.name="Pratyush"
console.log(jsUser)

 