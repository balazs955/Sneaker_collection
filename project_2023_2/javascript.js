function valtas(){
    var x = document.getElementById("penznem").value;
    var y = document.getElementById("penzkiir").value;

    if( x == "EUR"){
        document.getElementById("penzkiir").innerHTML = Math.floor(y / 380);
    }
    else if( x == "FT"){
        document.getElementById("penzkiir").innerHTML = Math.floor(y * 380);
    }
}