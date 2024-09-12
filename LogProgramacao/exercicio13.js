//let vendaCarro = "hatch"
let vendaCarro = prompt("Entre com modelo de carro:")

switch(vendaCarro){

    case "hatch":
        console.log("Compra efetuada com sucesso");
    break
    case "sedan":
        console.log("Tem certeza que não prefete este modelo, SEDAN ?");
    break
    case "motocicleta":
        console.log("Tem certeza que não prefete este modelo, MOTOCICLETA ?");
    break
    case "caminhões":
        console.log("Tem certeza que não prefete este modelo de CAMINHÃO ?");
    break
    default:
        console.log("Não trabalhos com este tipo de automóvel aqui");        
        
}