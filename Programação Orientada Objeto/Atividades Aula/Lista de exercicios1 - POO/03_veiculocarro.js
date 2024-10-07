class Veiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
}
class Moto extends Veiculo{
    constructor(marca, modelo, cilindradada){
        //super(marca, modelo)
        this.cilindradada = cilindradada;
        
    }
    exibirDetalhes(){
          return`Moto de marca ${this.marca}, modelo ${this.modelo}, cilindrada ${this.cilindrada}}`
    }
}

const minhaMoto = new Moto ("Yamaha", "Fazer", "600");
console.log(minhaMoto.super());

