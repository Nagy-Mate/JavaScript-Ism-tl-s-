window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");

    button.onclick = function Do()
    {
        out.innerHTML = "";
        let text = document.getElementById("input").value;
        if(text == ""){
            alert("Adjon meg egy szöveget! ");
        }else{
            
            for(let i  = 0; i < text.length; i++){
                if(isNaN(parseInt(text[i]))){
                    out.innerHTML += `<br>${text[i]}`;
                }
                else{break;}
                
            }
        }
    }
}