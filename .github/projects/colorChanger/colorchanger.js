const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach((button)=> { 
    button.addEventListener("click",(e)=>{
        console.log(e.target) //gives the id or the target event 
        console.log(e)//gives the whole event  (pointer event)
        console.log(e.type) //type of event -> click 
        body.style.backgroundColor = e.target.id 
    })
})