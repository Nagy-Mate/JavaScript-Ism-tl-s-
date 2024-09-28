window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");
    button.onclick = function Draw()
    {        
        let number = parseFloat(document.getElementById("numb").value);
        out.innerHTML = "";
        if(isNaN(number) || number <= 0){
            alert("Hibás adat! ");
        }   
        else
        {
            //let x = "%";
            //for(let i = 1; i <= number; i++){
            //    if(i === 1 || i === number){
            //        document.write(number*x);
            //    }else{
            //        let y = x +  
            //        document.write();
            //    }
            //}
            for (let i = 0; i < number; i++) 
            {
                let row = '';
                for (let j = 0; j < number; j++) 
                {
                    if (j === 0 || j === number - 1 || i === 0 || i === number - 1 || i === j) {
                        row += '%';
                    } else {
                        row += `&nbsp`;
                    }
                    
                }
                out.innerHTML += row;
                out.innerHTML += `<br>`;
            }
            
        }

    
    }
}