window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");
    button.onclick = function Calc()
    {        

        out.innerHTML = "";
        let number = parseFloat(document.getElementById("numb").value);

        //console.log(number);
        let factorial = 1;
        if(isNaN(number) || number < 0){
            alert("Hibás adat! ");
        }else if(number === 0){
            out.innerHTML = "A 0 faktoriálisa a  1.";
        }else{
            for(let i = 1; i <= number; i++){
                factorial *= i;
            }

            out.innerHTML = `A ${number} faktoriálisa ${factorial}.`;
        }
    }
}