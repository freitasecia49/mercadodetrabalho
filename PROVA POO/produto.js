class Produto {
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;

        }
}

let material1 = new Produto ("Lapis", 8,);
let material2 = new Produto ("Caderno", 20, "material escolar");
let material3 = new Produto ("Mochila", 150, "material escolar");
let material4 = new Produto ("Boneca", 55, "brinquedo");
let material5 = new Produto ("Bicicleta", 1000, "briquedo");

console.log(`${material1.nome}, ${material1.preco}, ${material1.categoria}`);
console.log(`${material2.nome}, ${material2.preco}, ${material2.categoria}`);
console.log(`${material3.nome}, ${material3.preco}, ${material3.categoria}`);
console.log(`${material4.nome}, ${material4.preco}, ${material4.categoria}`);
console.log(`${material5.nome}, ${material5.preco}, ${material5.categoria}`);