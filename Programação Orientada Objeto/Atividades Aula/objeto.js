let caminhao = {
    marca: "Volkswagen",
    modelo: "Constellation",
    ano: 2024,
    cor: "prata",
    cabine:[
        {tipo:'simples', capacidade:2, teto:'fechado'},
        {tipo:'dupla', capacidade:5, teto:'aberto'},
    ],

    ligar: function(){
        console.log("O caminhão está ligado.");
    },

    desligar: function(){
        console.log("O caminhão está desligado.");
    },
};
console.log(caminhao.marca);
console.log(caminhao["ano"], caminhao["modelo"]);
console.log(caminhao.cabine[0].tipo);

caminhao.ligar();
