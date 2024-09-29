window.onload = function()
{
    let out = document.getElementById("output"); 
    out.innerHTML = "";
    let number = 10;

    while(number < 31){
        out.innerHTML += `${number}: `;

        let divisor = 2;
        while(divisor <= number){
            if(number % divisor == 0){
                out.innerHTML += `${divisor}, `;
            }
            divisor ++;
        }

        out.innerHTML += `<br>`;
        number ++;
    }
    
    
}