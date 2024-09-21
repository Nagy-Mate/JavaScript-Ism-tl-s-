window.onload = function() 
{
    let button = document.getElementById("button");
    let surface =  document.getElementById("surface");
    let volume =  document.getElementById("volume");
    button.onclick = function Calculate()
    {
        surface.innerHTML = "";
        volume.innerHTML = "";
        let side1 = parseFloat(document.getElementById("side1").value);
        let side2 = parseFloat(document.getElementById("side2").value);
        let side3 = parseFloat(document.getElementById("side3").value);
        let surfaceValue = Math.round(SurfaceArea(side1, side2, side3) * 100) / 100;
        let volumeValue  = Math.round(Volume(side1, side2, side3) * 100) / 100;
        if(isNaN(surfaceValue) || isNaN(volumeValue))
        {
            alert("Hibás adat!");
        }
        else
        {
            surface.innerHTML = "Terület: " + surfaceValue;
            volume.innerHTML = "Térfogat: "+ volumeValue;
        }

    }

    function SurfaceArea(l, w, h)
    {
        return 2*l*w + 2*w*h + 2*l*h;
    }
    function Volume(l, w, h){
        return l*w*h
    }
}