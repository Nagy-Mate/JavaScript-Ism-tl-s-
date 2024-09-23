window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");

    button.onclick = function Do()
    {
        out.innerHTML = "";
        let number = Math.round(parseInt(document.getElementById("number").value));
        let numberStr = document.getElementById("number").value;
        if(isNaN(number)){
            alert('Hibás adat! ');
        }else{
            let result = 0;
            console.log(numberStr.length);

            for(let i = 0; i < numberStr.length; i++) {
                if(numberStr.length - 1 == i){
                    result += parseInt(number.toString()[i]);
                    result = result / i;
                    console.log(result);

                }else{
                    result += parseInt(number.toString()[i]);
                    console.log(number.toString()[i]);
                }
            }
            out.innerHTML = `A számok átlaga: ${result}`;
        }
    }
}