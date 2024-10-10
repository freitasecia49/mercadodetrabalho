class Funcionario{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;        
    }
    cacularSalario(){
        salario = 2000;
    }
}
class Gerente extends Funcionario{
    constructor(id, nome, qtdSuboirdinados){
        super(id,nome);
        this.qtdSuboirdinados = qtdSuboirdinados;
    }
    cacularSalario(){

    }
}



let func1 = new Funcionario (100,"Rodrigo Bernardino");
let func2 = new Funcionario (101,"Anderson Soares");
let func3 = new Funcionario (102,"Miguel Arcanjo");
let encarregado = new Gerente (10, "Marcos de Andrade", 3);

console.log(` ID: ${func1.id} Nome do funcionário: ${func1.nome}`);
console.log(` ID: ${func2.id} Nome do funcionário: ${func2.nome}`);
console.log(` ID: ${func3.id} Nome do funcionário: ${func3.nome}`);
console.log(` ID Gerente: ${encarregado.id}, Nome do Gerente: ${encarregado.nome}, Quantidade de funcionários: ${encarregado.qtdSuboirdinados}`);
