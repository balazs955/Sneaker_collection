function valtas(){
    var x = document.getElementById("penznem").value;
    var y = document.getElementById("penzkiir").value;

    if( x == "EUR"){
        document.getElementById("penzkiir").innerHTML = Math.floor(y / 400);
        document.getElementById("penzkiirfteur").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir").innerHTML = Math.floor(y * 400);
        document.getElementById("penzkiirfteur").innerHTML = "FT";
    }

    var y2 = document.getElementById("penzkiir2").value;

    if( x == "EUR"){
        document.getElementById("penzkiir2").innerHTML = Math.floor(y2 / 400);
        document.getElementById("penzkiirfteur2").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir2").innerHTML = Math.floor(y2 * 400);
        document.getElementById("penzkiirfteur2").innerHTML = "FT";
    }
    
    var y3 = document.getElementById("penzkiir3").value;

    if( x == "EUR"){
        document.getElementById("penzkiir3").innerHTML = Math.floor(y3 / 400);
        document.getElementById("penzkiirfteur3").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir3").innerHTML = Math.floor(y3 * 400);
        document.getElementById("penzkiirfteur3").innerHTML = "FT";
    }

    var y4 = document.getElementById("penzkiir4").value;

    if( x == "EUR"){
        document.getElementById("penzkiir4").innerHTML = Math.floor(y4 / 400);
        document.getElementById("penzkiirfteur4").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir4").innerHTML = Math.floor(y4 * 400);
        document.getElementById("penzkiirfteur4").innerHTML = "FT";
    }

    var y5 = document.getElementById("penzkiir5").value;

    if( x == "EUR"){
        document.getElementById("penzkiir5").innerHTML = Math.floor(y5 / 400);
        document.getElementById("penzkiirfteur5").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir5").innerHTML = Math.floor(y5 * 400);
        document.getElementById("penzkiirfteur5").innerHTML = "FT";
    }

    var y6 = document.getElementById("penzkiir6").value;

    if( x == "EUR"){
        document.getElementById("penzkiir6").innerHTML = Math.floor(y6 / 400);
        document.getElementById("penzkiirfteur6").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir6").innerHTML = Math.floor(y6 * 400);
        document.getElementById("penzkiirfteur6").innerHTML = "FT";
    }

    var y7 = document.getElementById("penzkiir7").value;

    if( x == "EUR"){
        document.getElementById("penzkiir7").innerHTML = Math.floor(y7 / 400);
        document.getElementById("penzkiirfteur7").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir7").innerHTML = Math.floor(y7 * 400);
        document.getElementById("penzkiirfteur7").innerHTML = "FT";
    }

    var y8 = document.getElementById("penzkiir8").value;

    if( x == "EUR"){
        document.getElementById("penzkiir8").innerHTML = Math.floor(y8 / 400);
        document.getElementById("penzkiirfteur8").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("penzkiir8").innerHTML = Math.floor(y8 * 400);
        document.getElementById("penzkiirfteur8").innerHTML = "FT";
    }
}
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function addorder1(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger1";
    }
}
function addorder2(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger2";
    }
}
function addorder3(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger3";
    }
}
function addorder4(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger4";
    }
}
function addorder5(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger5";
    }
}
function addorder6(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger6";
    }
}
function addorder7(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger7";
    }
}function addorder8(){
    var x = document.getElementById("nevtext");
    if (true === true) {
      x.innerHTML = "Hamburger8";
    }
}