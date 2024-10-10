class Pessoa {
    constructor(nomecompleto){
        this.nomecompleto = nomecompleto;
    }
}
class Emprestimo{
    constructor(dataEntrega, dataDevolucao){
        this.dataEntrega = dataEntrega;
        this.dataDevolucao = dataDevolucao;
        
    }
}
class Livro{
    constructor(nomeLivro, autor){
       this.nomeLivro = nomeLivro;
        this.autor = autor;
    }
}


let pessoa1 = new Pessoa ("Fernando de Freitas Pereira");
let data = new Emprestimo ("10/06/2024","30/08/2024");
let material = new Livro ("Programação Objeto", "Feliciano");

let pessoa2 = new Pessoa ("Carlos Eduardo Silva");
let data2 = new Emprestimo ("01/02/2024","20/07/2024");
let material2 = new Livro ("Programação Objeto", "Feliciano");


console.log("Lista de alunos que retiraram livros na Biblioteca");
console.log(` Nome: ${pessoa1.nomecompleto}`);
console.log(` Data de Entrega: ${data.dataEntrega} Data de Devolução: ${data.dataDevolucao}`);
console.log(` Nome do livro: ${material.nomeLivro} Autor: ${material.autor} `);

console.log(` Nome: ${pessoa2.nomecompleto}`);
console.log(` Data de Entrega: ${data2.dataEntrega} Data de Devolução: ${data2.dataDevolucao}`);
console.log(` Nome do livro: ${material2.nomeLivro} Autor: ${material2.autor} `);
