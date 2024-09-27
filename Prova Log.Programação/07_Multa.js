var VelocidadePermitida = parseInt(prompt("Entre com VELOCIDADE PERMITIDA DESTA ESTRADA:"));
var VelocidadeCondutor = parseInt(prompt("Entre com VELOCIDADE do CONDUTOR:"));

if( VelocidadeCondutor <= VelocidadePermitida ){

    document.write("Sem Multa");

}else if(VelocidadeCondutor <= (VelocidadePermitida * 1.20)){

    document.write("Multa Leve");

}else if(VelocidadeCondutor >= (VelocidadePermitida * 1.20)){

    document.write("Multa Grave");

}

