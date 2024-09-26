const numeros = [10, 55, 23, 78, 50, 99, 12, 20, 56, 100];

//maneira 1
//const maioresQueCinquenta = numeros.filter(numero => numero > 50);
//console.log(maioresQueCinquenta);

//maneira 2
maiorQueCinquenta = 0;
for (i=0; i<numeros.length; i++){

    if(numeros[i] > 50){
        maiorQueCinquenta++
    }
}

console.log(maiorQueCinquenta);