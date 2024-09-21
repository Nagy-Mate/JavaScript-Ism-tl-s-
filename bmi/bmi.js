window.onload = function()
{
    let button = document.getElementById("button");
    let bmi = document.getElementById("bmi");

    button.onclick = function Bmi(){

        bmi.innerHTML = "";
        let weight = parseFloat(document.getElementById("weight").value);
        let height =parseFloat(document.getElementById("height").value);
        console.log(weight, height)
        let bmiValue = Math.round((weight / (height*height)) * 100) / 100 ;
        
        if(isNaN(bmiValue)){
            alert("Hibás adat!");
        }
        else{
            bmi.innerHTML = "Bmi: " + bmiValue;
        }
    }
}