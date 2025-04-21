// const promiseOne = new Promise(function(resolve,reject){
//    // do an async task
//    setTimeout(()=>{
//     console.log("Async task completed")
//     resolve()
//    },1000) 
// })
// //then is related to resolve 
// promiseOne.then(()=>{
//     console.log("Promise completed")
// })

// //data consumption 
//  new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve({name:"aditya",email:"adityadas@gmail.com"})
//     },1000)
//  }).then((user)=>{  
//     console.log(user)
//  })

 //catching errors 
//  const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({name:"aditya",email:"adityadas@gmail.com"})
//         }else{
//             reject("error !something went wrong!")
//         }
//     },1000)
//  })

//  promiseThree.then((user)=>{
//     console.log(user)
//     return user.name
//  }).then((username)=>{
//     console.log(username) //get the username that is returned from the first then()
//  }).catch((error)=>{
//     console.log(error)
//  }).finally(()=>{
//     console.log("promise is executed")
//  })


//  //another approach using try catch block and async await 
//   async function PromiseThreeconsume() {
//     try{
//      // Await the promise and get the user object
//     const user = await promiseThree;
//     console.log(user); // Log the user object
//     // Extract the username from the user object
//     const username = user.name;
//     console.log(username); // Log the username
//     }catch(error){
//         console.log(error)
//     }finally {
//         console.log("promise is executed"); // Execute cleanup code
//       }
//   }

  //PromiseThreeconsume()

//   async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json() //convert the string into json 
        
//         // Iterate over each user object in the array
//         data.forEach(user => {
//             console.log(`Name: ${user.name}, Email: ${user.email}`);
//         });

//     } catch (error) { 
//         console.log(`E: ${error}`)
//     }
//   }
//   getAllUsers()

// doing the same code using then and catch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    const data = response.json() //convert the string into json 
    .then((data)=>{
        data.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    })   
})
.catch((error)=> console.log("error"))
.finally(()=>{
    console.log("promise completed")
})
