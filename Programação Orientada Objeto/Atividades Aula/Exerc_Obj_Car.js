let carro = {
    fabricante: "Volkswagen",
    modelo: "Gol",
    ano: 2018,
    cor: "vermelho",
    quilometragem: 0,

    //Método para dirigir o carro e aumentar a quilomentragem
    dirigir: function(distancia) {
        this.quilometragem += distancia;
    },

    //métdodo para exibir as informações do carro
    exibirInformacoes: function(){
        console.log(`Carro: ${this.fabricante} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}, Quilometragem: ${this.quilometragem} KM`);
    },

    //método para alterar a cor do carro
    pintarCarro: function(novaCor) {
        this.cor = novaCor;
    }
}

//Testando o objeto "Carro"

carro.dirigir(50); //aumenta a quilometragem em 50Km
carro.exibirInformacoes(); //Exibe: Carro: Volkswagen Gol, Ano: 2018, Cor: Vermelho, Quilometragem: 50 km

carro.pintarCarro("Azul"); //muda a cor do carro para azul
carro.exibirInformacoes(); // exibe: Carro: Volkswagen