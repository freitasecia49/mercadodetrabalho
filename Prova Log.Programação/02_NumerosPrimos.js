const numerosPrimos = [];

for(var i=0; i<200; i++){

    if (numerosPrimos[i] / numerosPrimos[i]){

        numerosPrimos[i] = i +"PRIMO";

    } else 
        numerosPrimos[i] = i;
    

}    


console.log(numerosPrimos);