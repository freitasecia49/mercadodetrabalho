var numero1 = parseInt(prompt("Entre com PRIMEIRO número inteiro:"));
var numero2 = parseInt(prompt("Entre com SEGUNDO número inteiro:"));
var operadorMatematico = (prompt("Entre com SOMA, SUBTRAÇÃO, DIVISÃO OU MULTIPLICAÇÃO:"));

if(operadorMatematico == "+"){

    var soma = numero1 + numero2;
    document.write(soma);

}else if(operadorMatematico == "-"){

    var subtracao = numero1 - numero2;
    document.write(subtracao);

}else if(operadorMatematico == "/"){

    var divisao = numero1 / numero2;
    document.write(divisao);

}else if(operadorMatematico == "*"){

    var multiplicacao = numero1 * numero2;
    document.write(multiplicacao);
}