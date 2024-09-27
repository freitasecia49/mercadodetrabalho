var numero1 = parseInt(prompt("Entre com PRIMEIRO número inteiro:"));
var numero2 = parseInt(prompt("Entre com SEGUNDO número inteiro:"));
var numero3 = parseInt(prompt("Entre com TERCEIRO número inteiro:"));

if(numero1 > numero2 && numero1 > numero3){

    alert(`O NÚMERO ${numero1} É O MAIOR NÚMERO DENTRE OS 3 NÚMEROS INSERIDOS`);

}else if(numero2 > numero1 && numero2 > numero3){

    alert(`O NÚMERO ${numero2} É O MAIOR NÚMERO DENTRE OS 3 NÚMEROS INSERIDOS`);


}else if(numero3 > numero1 && numero3 > numero2){

    alert(`O NÚMERO ${numero3} É O MAIOR NÚMERO DENTRE OS 3 NÚMEROS INSERIDOS`);

}
