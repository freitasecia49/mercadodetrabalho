class Animal {
    som() {
        return "Som de animal";
    }
}

class Cachorro extends Animal{
    som(){
        return "Au, AU";
    }
}

class Gato extends Animal {
    som(){
        return "Miau, Miau"
    }
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();

console.log(meuCachorro.som());
console.log(meuGato.som());