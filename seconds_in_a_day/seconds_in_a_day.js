window.onload = function()
{
    let button = document.getElementById("button");
    let out = document.getElementById("output");
    button.onclick = function Calc()
    {        

        out.innerHTML = "";
        let hours = Math.round(parseInt(document.getElementById("hours").value)) ;
        let minutes =Math.round( parseInt(document.getElementById("minutes").value)) ;
        let seconds = Math.round(parseInt(document.getElementById("seconds").value)) ;
        if(isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds <   0 || hours > 24 || minutes > 60 || seconds > 60 || (hours == 24 && minutes == 60 && seconds > 0) || (minutes == 60 && seconds > 0)){
            alert("Hibás adat! ");
        }else{
            let rSeconds = 86400 - (hours * 3600) - (minutes * 60) - seconds;
            //console.log("86400", hours*360, minutes*60, seconds)
            out.innerHTML = `${rSeconds} másodperc van még a napban! `;
        }
       
    }
}