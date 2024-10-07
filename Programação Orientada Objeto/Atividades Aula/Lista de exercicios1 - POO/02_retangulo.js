class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
   calcularArea(){
        console.log(`A área do retângulo é:`, this.largura * this.altura );
   }
}

let area = new Retangulo(5, 2);
//let area2 = new Retangulo(8, 4);

area.calcularArea();
//area2.calcularArea();