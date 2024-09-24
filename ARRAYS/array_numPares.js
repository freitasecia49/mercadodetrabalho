let numPares = [1,2,3,4,5,6,7,8,9,10];

    //FORMA 1
   /* for(var i=0; i<numPares.length; i++){
        if(numPares[i]%2==0){
            console.log(numPares[i])
        }
    }*/
    

//FORMA 2
let pares = numPares.filter(function(numero){
    return numero % 2 ==0;

});
console.log(`Números pares: ${pares}`)
    


        





