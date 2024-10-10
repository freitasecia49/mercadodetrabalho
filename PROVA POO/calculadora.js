var numero1 = parseInt(prompt("Entre com PRIMEIRO número inteiro:"));

var operadorCalculo = (prompt("Entre com SOMA, SUBTRAÇÃO, DIVISÃO OU MULTIPLICAÇÃO:"));
if((operadorCalculo != "+") && (operadorCalculo != "/") && (operadorCalculo != "*") && (operadorCalculo != "-")) {
    alert("FAVOR ENTRAR SOMENTE COM OPERAÇÕES DE CÁLCULO");
}else

var numero2 = parseInt(prompt("Entre com SEGUNDO número inteiro:"));



if(operadorCalculo == "+"){
        
        var soma = numero1 + numero2;
        document.write(numero1, "+", numero2, "=", soma);

}else if(operadorCalculo == "-"){

    var subtracao = numero1 - numero2;
    document.write(numero1, "-", numero2, "=", subtracao);
    

}else if(operadorCalculo == "/"){

    var divisao = numero1 / numero2;
    document.write(numero1, "/", numero2, "=", divisao);
    

}else if(operadorCalculo == "*"){

    var multiplicacao = numero1 * numero2;
    document.write(numero1, "*", numero2, "=", multiplicacao);
}