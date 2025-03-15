//object literals 

//to add a symbol in the object 


// const addr =  Symbol ("city")

//  const jsUser ={
//     name : "Aditya",
//     age : 18,
//     [addr]:"Kolkata"//use as a symbol 
//  }


/*
 //to access the objects 
 console.log(jsUser.age)
 console.log(jsUser["name"])
 console.log(jsUser[addr]) 
*/

//to overwrite
// jsUser.age=21
// console.log(jsUser.age)
// jsUser.name="Aditya Das"
// Object.freeze(jsUser) //now no changes can be done in the object
// jsUser.name="Pratyush"
// console.log(jsUser)


// jsUser.greeting= function() {
//    console.log("Hello world")
// }
// console.log(jsUser.greeting)//function reference 
// console.log(jsUser.greeting())//accesing the function from the object 

// jsUser.greetingTwo=function(){
//    console.log(`the name of the user is ${this.name}`)//String intercolation
// }
// console.log(jsUser.greetingTwo())

 //destructing an object 
//  const course = {
//     name :"javascript",
//     id: 1
//  }
//  const {name : n} = course;
//  console.log(n)

 