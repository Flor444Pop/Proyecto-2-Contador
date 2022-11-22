var numero=0;
function disminuir (){
numero--;
validarNumero();
document.getElementById("contador").innerHTML=numero;
}

var numero=0;
function incrementar (){
numero++;
validarNumero();
document.getElementById("contador").innerHTML=numero;
}


var numero=0;
function reiniciar (){
numero=0;
validarNumero();
document.getElementById("contador").innerHTML=numero;
}

function validarNumero () {
if (numero<0) {
document.getElementById("contador").style.color="red";	
}


if (numero>0) {
document.getElementById("contador").style.color="green";	
}


if (numero==0) {
document.getElementById("contador").style.color="blue";	
}
}