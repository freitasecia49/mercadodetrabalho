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

const veiculo = new Carro("volkswagen", "voyage", 2015);
veiculo.exibirDetalhes();