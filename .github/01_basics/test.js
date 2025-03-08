console.log("hello world")
const heros = ["spiderman","IronMan","Thor"]//array
let myObj ={
    id: "s3",
    value :22,
}//object
const myFunction = function(){
    console.log(heros[0])
}
//myFunction()//function 
/*
console.log(typeof(myFunction)) //function
console.log(typeof(myObj)) //object
console.log(typeof(heros)) //object
*/
 
/*String
const gameName = new String('Mario')
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.split(""))
*/

/*Number and Math
let num = Math.random()
console.log((Math.floor(num)*10)+1)
*/



  /*Date
// Creating a new Date object with the current date and time
const now = new Date();

// Displaying the current date in ISO format
console.log("ISO Format:", now.toISOString());

// Extracting specific components
console.log("Year:", now.getFullYear());
console.log("Month (0-indexed):", now.getMonth());
console.log("Day of Month:", now.getDate());
console.log("Day of Week:", now.getDay());

// Using static methods
console.log("Current Timestamp:", Date.now());
console.log("Parsed Timestamp:", Date.parse("March 7, 2025"));

// Modifying the date
now.setFullYear(2030);
console.log("Updated Date:", now.toString());

const myDate = new Date();
const formattedDate = myDate.toLocaleString("en-US", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
});
console.log(formattedDate); // e.g., "Friday, March 7, 2025"

*/

