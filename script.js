
var campodetexto = document.getElementById("entradadetexto");
var boton1 = document.querySelector(btnencriptar);
var boton2 = document.querySelector(btndesencriptar);
var resultado = document.querySelector(cajadetexto);

function encriptar(){
    borrarcontenido();
    let texto = campodetexto.value.toLowerCase();
    var txtcifrado = texto.replace(/a/,"ai");
    var txtcifrado = txtcifrado.replace(/e/,"enter");
    var txtcifrado = txtcifrado.replace(/i/,"imes");
    var txtcifrado = txtcifrado.replace(/o/,"ober");
    var txtcifrado = txtcifrado.replace(/u/,"ufat");
    
    document.getElementById("cajadetexto").style.display="block";
    document.getElementById("cajadetexto").innerHTML= txtcifrado;
}
function borrarcontenido(){
    document.getElementById("persona").style.display="none";
    document.getElementById("text001").style.display="none";
    document.getElementById("text002").style.display="none";    
}
function desencriptar(){
    borrarcontenido();
    let texto = campodetexto.value.toLowerCase();
    var txtcifrado = texto.replace(/ai/,"a");
    var txtcifrado = txtcifrado.replace(/enter/,"e");
    var txtcifrado = txtcifrado.replace(/imes/,"i");
    var txtcifrado = txtcifrado.replace(/ober/,"o");
    var txtcifrado = txtcifrado.replace(/ufat/,"u");
    
    document.getElementById("cajadetexto").style.display="block";
    document.getElementById("cajadetexto").innerHTML= txtcifrado;
}