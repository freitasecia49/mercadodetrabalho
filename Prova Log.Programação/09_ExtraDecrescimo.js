var numero = parseInt(prompt("Entre com um NÚMERO INTEIRO POSITIVO:"));
const numDecrescente = [];

    
    if (numero > 10){

        alert("Favor inserir número MENOR que 10");
    
    }else for( var i=numero; i<=10; i++){

       
        numDecrescente[i] = i;
      
    }
    

    numDecrescente.reverse();
    console.log(numDecrescente);
    
        
    
    
    






