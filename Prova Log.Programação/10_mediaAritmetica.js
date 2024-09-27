var nota1 = parseInt(prompt("Entre com PRIMEIRA nota do aluno:"));
var nota2 = parseInt(prompt("Entre com SEGUNDA nota do aluno:"));
var nota3 = parseInt(prompt("Entre com TERCEIRA nota do aluno:"));
var media = 0;

media = (nota1 + nota2 + nota3) / 3;

if( media >= 7){
    console.log("APROVADO");
}else {
    console.log("REPROVADO");
}

