let nomeProduto = "";
let precoProduto = 0;
let qtdeProduto = 0;
let totalResultdo = 0;

var n = 0;
var x = 0;

do{
   nomeProduto = prompt("Digite o produto:");
   precoProduto = prompt ("Digite o preco:");
   qtdeProduto = prompt ("Digite quantidade: ");

   console.log(nomeProduto);
   console.log(precoProduto);
   console.log(qtdeProduto);

    x = (qtdeProduto * precoProduto)
   
    totalResultdo = x++

}while( n < 6 );
    
    
    console.log( "Total da compra:" + totalResultdo );



