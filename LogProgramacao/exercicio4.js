var numero1 = parseInt(prompt("Entre com primeiro número:"));
var numero2 = parseInt(prompt("Entre com segundo número:"));
var numero3 = parseInt(prompt("Entre com terceiro número:"));

if (numero1 > numero2 && numero1 > numero3 ){

    document.write("Maior número:" + numero1)
}

else if(numero2 > numero3){

    document.write("Maior número:" + numero2)
}
else {

    document.write("Maior número:" + numero3)
}
