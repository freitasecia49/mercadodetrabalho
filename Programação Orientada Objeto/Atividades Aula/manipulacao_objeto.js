let pessoa = {
    nome: "Ana",
    idade: 30
};

//Adicionar nova propriedade
pessoa.cidade = "Rio de Janeiro";
console.log(pessoa.cidade);

//Modificar propriedade existente
pessoa.idade = 31;
console.log(pessoa.idade);

//Excluir propriedade
delete pessoa.cidade;
console.log(pessoa.cidade);