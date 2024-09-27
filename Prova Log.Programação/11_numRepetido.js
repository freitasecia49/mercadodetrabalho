const numRepetido = [];
numRepetido[1] = parseInt(prompt("Entre com PRIMEIRO número:"));
numRepetido[2] = parseInt(prompt("Entre com SEGUNDO número:"));

if(numRepetido[1] == numRepetido[2]){

    alert("Favor NÃO inserir números iguais");
    

}else {

    document.write("Números OK!!");
}