//let salario = 1000;
var salario = parseInt(prompt("Entre com salário:"))


if (salario <= 500){
    salario = salario * 1.15
    console.log("Você teve um aumento de 15%: " + salario)


}else if (salario > 500 && salario <= 1000){
    salario = salario * 1.125;
    console.log("Você teve um aumento de 12,5%: " + salario)


} else {

    salario = salario * 1.1
    console.log("Você teve um aumento de 10%: " + salario)


}


 
    
