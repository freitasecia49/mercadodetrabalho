let fruta = prompt("Digite um nome de fruta:");
//let fruta = "banana";
let texto;

switch(fruta){          
            
    case "maça":
    texto = "Não vendemos esta fruta aqui";
    break;

    case "kiwi":
    texto = "Estamos com escassez de kiwi";
    break;

    case "melancia":
    texto = "Aqui está são trê reais o quilo";
    break;

    default:
        texto = "Não encontramos NENUMA FRUTA DESTA";

}
console.log(texto);
//document.getElementById().innerHTML = texto;
//document.write = texto;