class Animal {
    emitirSom(){
        return "Som do animal";
    }
}

class Cachorro extends Animal{
    emitirSom(){
        return "Latido";
    }
}

class Gato extends Animal{
    emitirSom(){
        return "Miau"
    }
}

let meuCachorro = new Cachorro();
let meuGato = new Gato();

console.log("O som do cachorro é: ", meuCachorro.emitirSom());
console.log("O som do gato é: ", meuGato.emitirSom());