var maiorNum = [10,20,130,45,50,65,72,83,120,220,5];
//var maior = Math.max.apply(null,maiorNum);

//console.log(maior)


let maior = maiorNum[0]
for( var i=1; i < maiorNum.length; i++){
    
    if( maiorNum[i] > maior){
        maior = maiorNum[i];
    }
        
    }
       
 
console.log(maior);



        
