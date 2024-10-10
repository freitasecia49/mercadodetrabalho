class Agenda{
    constructor(nome, endereco){
        this.nome = nome;
        this.endereco = endereco;
    }
}
class Contato extends Agenda{
    constructor(nome, endereco, telefone){
        super(nome,endereco);
        this.telefone = telefone;

    }
}

let pessoa1 = new Contato ("Marcele", "Rua SAnta Efigênia", 99904050);
let pessoa2 = new Contato ("Francisco", "Rua Agenor Marcondes Godoy", 98985028);

console.log(`Minha lista de contatos da agenda: Nome: ${pessoa1.nome} Emdereço: ${pessoa1.endereco} Número Celular: ${pessoa1.telefone}`);
console.log(`Minha lista de contatos da agenda: Nome: ${pessoa2.nome} Emdereço: ${pessoa2.endereco} Número Celular: ${pessoa2.telefone}`);