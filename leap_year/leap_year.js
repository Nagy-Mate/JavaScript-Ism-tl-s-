window.onload = function()
{
    let button = document.getElementById("button");

    button.onclick = function Calculate()
    {
        let year = Math.round(parseFloat(document.getElementById("year").value));
        let out = document.getElementById("output");
        if(isNaN(year) || year <= 0){
            alert("Hibás adat! ");
        }else{
            if(year % 4 == 0){
                out.innerHTML = "Szökőév! ";
            }else{
                out.innerHTML = "Nem szökőév!";
            }
        }
    }
}