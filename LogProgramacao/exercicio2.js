

var nota1 = parseInt(prompt("Informe a primeira nota"));
var nota2 = parseInt(prompt("Informe a segunda nota"));
var nota3 = parseInt(prompt("Informe a terceira nota"));
var nota4 = parseInt(prompt("Informe a quarta nota"));


media = (( nota1 + nota2 + nota3 + nota4 )/4);


if (media >= 6){

    document.write("Aprovado");
}
else{
    document.write("Reprovado");
}


//document.write(media)

//let primeira = Number(prompt("Entre com primeira Nota:"));
//document.write(primeira)