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

    var b7 = document.getElementById("artext").value;

    if( x == "EUR"){
        document.getElementById("artext").innerHTML = Math.floor(b7 / 400);
        document.getElementById("artextpenznem").innerHTML = "€";
    }
    else if( x == "FT"){
        document.getElementById("artext").innerHTML = Math.floor(b7 * 400);
        document.getElementById("artextpenznem").innerHTML = "FT";
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
  var x1x1 = document.getElementById("penznem").value;
  var x = document.getElementById("nevtext");
  var y = document.getElementById("artext");
  if (true === true) {
    x.innerHTML = "NIKE AIR FORCE 1 LOW SUPREME WHITE";
    if( x1x1 == "EUR"){
      y.innerHTML = "242";
    }
    else if( x1x1 == "FT"){
      y.innerHTML = "96800";
    }
  }
}
function addorder2(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "NIKE BLAZER MID 77 WHITE BLACK";
      if( x1x1 == "EUR"){
        y.innerHTML = "106";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "42400";
      }
      
    }
}

function addorder4(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "UNDEFEATED X NIKE AIR FORCE 1 LOW";
      if( x1x1 == "EUR"){
        y.innerHTML = "218";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "87200";
      }
    }
}
function addorder5(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "NIKE DUNK SB LOW ORANGE LOBSTER";
      if( x1x1 == "EUR"){
        y.innerHTML = "523";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "209200";
      }
    }
}
function addorder6(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "AIR FORCE 1 LOW TRAVIS SCOTT CACTUS JACK";
      if( x1x1 == "EUR"){
        y.innerHTML = "510";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "204000";
      }
    }
}
function addorder7(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "NIKE DUNK LOW OCEAN GREEN";
      if( x1x1 == "EUR"){
        y.innerHTML = "225";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "90000";
      }
    }
}
function addorder8(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "AIR MAX 1 TRAVIS SCOTT CACTUS JACK BROWN";
      if( x1x1 == "EUR"){
        y.innerHTML = "600";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "240000";
      }
    }
}
function addorder9(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "ADIDAS YEEZY 350 V2 MX ROCK";
      if( x1x1 == "EUR"){
        y.innerHTML = "374";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "149600";
      }
    }
}
function addorder10(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "ADIDAS YEEZY BOOST 350 V2 BONE";
      if( x1x1 == "EUR"){
        y.innerHTML = "412";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "164800";
      }
    }
}
function addorder11(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "ADIDAS YEEZY BOOST 350 V2 BLUE TINT";
      if( x1x1 == "EUR"){
        y.innerHTML = "325";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "130000";
      }
    }
}
function addorder12(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "ADIDAS YEEZY BOOST 350 V2 BLACK RED";
      if( x1x1 == "EUR"){
        y.innerHTML = "437";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "174800";
      }
    }
}

function addorder14(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "ADIDAS YEEZY 700 V3 SALT FADE";
      if( x1x1 == "EUR"){
        y.innerHTML = "295";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "118000";
      }
    }
}

function addorder16(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "ADIDAS YEEZY BOOST 380 CALCITE GLOW";
      if( x1x1 == "EUR"){
        y.innerHTML = "386";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "154400";
      }
    }
}
function addorder17(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "AIR JORDAN 6 RETRO COOL GREY";
      if( x1x1 == "EUR"){
        y.innerHTML = "242";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "96800";
      }
    }
}
function addorder18(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "AIR JORDAN 4 RETRO SEAFOAM";
      if( x1x1 == "EUR"){
        y.innerHTML = "370";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "148000";
      }
    }
}
function addorder19(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "JORDAN 11 RETRO CHERRY (2022)";
      if( x1x1 == "EUR"){
        y.innerHTML = "320";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "128000";
      }
    }
}
function addorder20(){
  var x1x1 = document.getElementById("penznem").value;
    var x = document.getElementById("nevtext");
    var y = document.getElementById("artext");
    if (true === true) {
      x.innerHTML = "AIR JORDAN 4 RETRO MILITARY BLACK";
      if( x1x1 == "EUR"){
        y.innerHTML = "510";
      }
      else if( x1x1 == "FT"){
        y.innerHTML = "204000";
      }
    }
}
function rendel(){
    var x1 = document.getElementById("inputvezeteknev").value;
    var x2 = document.getElementById("inputkeresztnev").value;
    var x3 = document.getElementById("inputemail").value;
    var x4 = document.getElementById("inputtelefon").value;
    var x5 = document.getElementById("inputcim").value;
    var x6 = document.getElementById("inputtelepules").value;
    var x7 = document.getElementById("inputiranyitoszam").value;
    var x8 = document.getElementById("inputmeret").value;
    var x9 = document.getElementById("inputfizetes").value;

    if (x1 == "" || x2 == "" || x3 == "" || x4 == "" || x5 == "" || x6 == "" || x7 == "" || x8 == "Válassza ki a méretét" || x9 == "Válasszon") { 
        document.getElementById("modalrendeles").innerHTML = "Hibás rendelés"; 
        document.getElementById("modalerkezes").innerHTML = "Töltse ki az összes mezőt, hogy megrendelhesse a sneakert!"; 
    }else if ((!x3.includes("@")) || (!x3.includes(".")) ){
        document.getElementById("modalrendeles").innerHTML = "Hibás email cím"; 
        document.getElementById("modalerkezes").innerHTML = "Ellenőrizze az email címet";

    }else{
        document.getElementById("modalrendeles").innerHTML = "Köszönjük a rendelést!"; 
        document.getElementById("modalerkezes").innerHTML = "A sneakered 2-3 napon belül megérkezik";
    }
}