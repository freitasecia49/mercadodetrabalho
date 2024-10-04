let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "Blue",

    //Método para exibir informações do carro
    displayInfo: function(){
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    },
    //Método para alterar a cor do carro
    paintCar: function(newColor){
        this.color = newColor;
    }
};

//Acessando propriedades
console.log(car.make); //saída: Toyta

//chamando métodos
car.displayInfo(); //saída: Car: Toyota Corolla, Year

car.fuelType = "Gasolina";
console.log("fuelType:",car.fuelType)

delete car.year;
console.log(car.year);


