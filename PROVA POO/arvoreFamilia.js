class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
class Pai extends Pessoa{
    constructor(nome, idade, paterno){
        super(nome,idade);
        this.paterno = paterno;
    }
}
class Mae extends Pessoa{
    constructor(nome, idade, materno){
        super(nome,idade);
        this.materno = materno;
    }
}


let pai = new Pai ("Rodrigo", 70, "pai");
let mae = new Mae ("Bernadete", 63, "mae");
let irmao = new Pai ("Rafael", 36, "irmão");
let irma = new Mae ("Claudia", 28, "irmã");

console.log("Minha árvore Genealógica da Família");
console.log(` Nome: ${pai.nome} Idade: ${pai.idade} Parentesco: ${pai.paterno}`);
console.log(` Nome: ${mae.nome} Idade: ${mae.idade} Parentesco: ${mae.materno}`);
console.log(` Nome: ${irmao.nome} Idade: ${irmao.idade} Parentesco: ${irmao.paterno}`);
console.log(` Nome: ${irma.nome} Idade: ${irma.idade} Parentesco: ${irma.materno}`);