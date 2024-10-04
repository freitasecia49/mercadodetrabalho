//Não é uma função e sim uma CONSTRUTORA
function Carro(marca, modelo, ano, cor){
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
this.cor = cor;
this.ligar = function(){
    console.log("O carro está ligado.")
};

}

let meuCarro = new Carro("Volkswagen", "Gol", 2016, "preto");
console.log(meuCarro.marca);
console.log(meuCarro.modelo);
console.log(meuCarro.ano);
meuCarro.ligar();