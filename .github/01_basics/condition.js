// function addNumbers (...num ){//rest operator 
//     return num
// }
// console.log(addNumbers(2,3,3))

// const fun =   function (num) {
//     return num+3
// }
// console.log(fun(4)) //hosted function 

// //arrow functions
// const fun2 = (num1)=>{
//        return num1*2 
// }
// console.log(fun2(3))

// //implicit arrow functions 

// const fun4= (num1)=> num1*4 //no need to use return if using () too
// console.log(fun4(4));

// //Immediately invoked function Expression (iife)
// ((name)=>{
//     console.log("Hello, IIFE with Arrow Function!")
// })("aditya"); // simple unnamed iife 

// (( he)=>{
//     console.log(he+1)
// })(2);

// (function greet(name) {
//     console.log("Hello, " + name);
// })("Aditya");//named iife



//for of loops

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}//arrays

const greetings="Hello World"
for (const chr of greetings) {
    console.log(`The character is ${chr}`)
}//string 

//Maps
const userAges = new Map([
    ["Alice", 25],
    ["Bob", 30],
    ["Charlie", 28]
]);

console.log(userAges); // Map(3) { 'Alice' => 25, 'Bob' => 30, 'Charlie' => 28 }

const myMap = new Map();
myMap.set("name", "Aditya");
myMap.set(1, "Number as Key");
myMap.set(true, "Boolean as Key");
console.log(myMap);
//Allows different key types.
console.log(myMap.get("name")); // 'Aditya'
console.log(myMap.get(1)); // 'Number as Key'
console.log(myMap.get(true)); // 'Boolean as Key'
console.log(myMap.get("unknown")); // undefined (Key doesn't exist)
console.log(myMap.size); // Number of key-value pairs


console.log(myMap.size); // Number of key-value pairs



const students = new Map();

// Adding entries
students.set(101, { name: "Aditya", grade: "A" });
students.set(102, { name: "John", grade: "B" });
students.set(103, { name: "Emma", grade: "A+" });

// Looping through the map
for (let [id, info] of students.entries()) {//using entries as we store object in the map
    console.log(`Student ID: ${id}, Name: ${info.name}, Grade: ${info.grade}`);
}

// Checking size
console.log(`Total students: ${students.size}`);

// Checking existence
console.log(students.has(102)); // true

// Deleting a student
students.delete(102);
console.log(`After deletion, total students: ${students.size}`);


const student = { name: "Alice", age: 25, grade: "A" };

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
//for...in (Iterate Over Object Keys) does not wrk on array as it treats indices as key 


// for...of on an Array(Iterate Over Values)
const colors = ["red", "blue", "green"];

for (let color of colors) {
    console.log(color);
}




