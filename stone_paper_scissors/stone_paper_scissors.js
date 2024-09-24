window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");
    button.onclick = function Game()
    {        
        //1Kő--2papír--3olló
        out.innerHTML = "";
        let p1 = parseInt(document.getElementById("p1").value);
        let p2 = parseInt(document.getElementById("p1").value);
        if(isNaN(p1) || isNaN(p2)){
            alert("Hibás adat!");
        }else if(p1 === 1 && p2 === 2){
            out.innerHTML = "Kettes játékos nyert! ";
        }else if(p1 === 1 && p2 === 3){
            out.innerHTML = "Egyes játékos nyert! ";
        }else if(){
            
        }

    }
}