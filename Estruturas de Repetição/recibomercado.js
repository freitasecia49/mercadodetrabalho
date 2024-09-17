//função principal
function caixaDemercado() {
    let totalGeral = 0;
    let numProdutos = parseInt(prompt("Quantos produtos você está comprando?"));
    let recibo = "";

//Estrutura de repetição para capturar informações de cada produto
for(let i = 0; i < numProdutos; i++) {
    let nomeProduto = prompt(`Nome do produto ${i +1}:`);
    let quantidade = parseInt(prompt(`Quantidade de ${nomeProduto}:`));
    let valorUnitario = parseFloat(prompt(`Valor unitário de ${nomeProduto}:`));

//Calcula o valor total do produto
let valorTotalProduto = quantidade * valorUnitario;
totalGeral += valorTotalProduto;

//Adiciona as informações ao recibo
recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}\n`;

}

//Exibe o recibo e o total geral
recibo += `\nTotal geral: R$ ${totalGeral.toFixed(2)}`;
alert(recibo);

}
//chama a função
caixaDemercado();