window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");
    button.onclick = function Calc()
    {        

        out.innerHTML = "";
        let gradeInt = parseInt(document.getElementById("grade").value);
        switch(gradeInt){
            case 1:
                out.innerHTML = "F";
                break;
            case 2: 
                out.innerHTML = "D";
                break;
            case 3:
                out.innerHTML = "C";
                break;
            case 4: 
                out.innerHTML = "B";
                break;
            case 5: 
                out.innerHTML = "A";
                break;
            default:
                out.innerHTML = "Hibás adat! ";
                break;
        }
       
    }
}