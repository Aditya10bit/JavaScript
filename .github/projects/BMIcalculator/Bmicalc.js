const form = document.querySelector('form')
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    //get the datas
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result  = document.querySelector("#results")
    const guide = document.querySelector("#guidelines")
    //check for wrong inputs
    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML= `PLEASE ENTER A VALID HEIGHT ${height}`
    }else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML= `PLEASE ENTER A VALID WEIGHT ${weight}`
    }
    // display the result
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML =  `<span> YOUR BMI IS : ${bmi}</span>` 
        if(bmi<=18.6){
            guide.innerHTML ="<span>UNDER WEIGHT</span>"
        }
        if(bmi>18.6 && bmi<=24.9){
            guide.innerHTML ="<span>NORMAL WEIGHT</span>"
        }
        else{
            guide.innerHTML ="<span>OVER WEIGHT</span>"
        }
    }
})