function valtas(){
    var x = document.getElementById("penznem").value;
    var y = document.getElementById("penzkiir").value;
    var z = document.getElementById("penzkiirfteur").value;

    if( x == "EUR"){
        document.getElementById("penzkiir").innerHTML = Math.floor(y / 400);
        document.getElementById("penzkiirfteur").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir").innerHTML = Math.floor(y * 400);
        document.getElementById("penzkiirfteur").innerHTML = "FT";
    }
}