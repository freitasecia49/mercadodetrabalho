class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }
    exibirDetalhes (){
       console.log(`Marca deste carro é: ${this.marca} do modelo: ${this.modelo} ano: ${this.ano}`)
    }
}

let veiculo1 = new Carro("volkswagen", "voyage", 2015);
let veiculo2 = new Carro("volkswagen", "GOL", 2000);

veiculo1.exibirDetalhes();
veiculo2.exibirDetalhes();