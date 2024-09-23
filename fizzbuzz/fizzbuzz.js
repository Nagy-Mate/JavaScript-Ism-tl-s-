window.onload = function()
{

    let out = document.getElementById("output");
    out.innerHTML = "";

    for(let i = 1; i < 100 ;i++){
        if(i % 3 == 0){
            if(i % 5 == 0){
                out.innerHTML += "fizzbuzz, ";
            }else{
                out.innerHTML += "fizz, ";
            }
        }else if(i % 5 == 0){
            if(i % 3 == 0){
                out.innerHTML += "fizzbuzz, " ;
            }else{
                out.innerHTML += "buzz, " ;
            }
        }else{
            out.innerHTML +=  `${i}, `;
        }
    }

}