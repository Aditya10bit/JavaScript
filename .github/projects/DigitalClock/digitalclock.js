const clock = document.getElementById("clock")
setInterval(function(){ // to print the time continously 
    const date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)