function addNumbers (...num ){//rest operator 
    return num
}
console.log(addNumbers(2,3,3))

const fun =   function (num) {
    return num+3
}
console.log(fun(4)) //hosted function 

//arrow functions
const fun2 = (num1)=>{
       return num1*2 
}
console.log(fun2(3))

//implicit arrow functions 

const fun4= (num1)=> num1*4 //no need to use return if using () too
console.log(fun4(4));

//Immediately invoked function Expression (iife)
((name)=>{
    console.log("Hello, IIFE with Arrow Function!")
})("aditya"); // simple unnamed iife 
