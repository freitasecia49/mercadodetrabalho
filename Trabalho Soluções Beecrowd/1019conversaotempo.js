var N;
var min
var segundos;
var Hora;
var resto;

N = 556; //segundos
    Hora = (N/3600).toFixed(0); //dividi o total de segundos pelo totla de segundos correspondente a uma hora.
    resto = (N % 3600);
    min = (resto / 60).toFixed(0);
    segundos = (resto % 60);
    
console.log(Hora,":",min,":",segundos)


N = 1; //segundos
    Hora = (N/3600).toFixed(0);
    resto = (N % 3600);
    min = (resto / 60).toFixed(0);
    segundos = (resto % 60);
    
console.log(Hora,":",min,":",segundos)

N = 140153;  //segundos
    Hora = (N/3600).toFixed(0);
    resto = (N % 3600);
    min = (resto / 60).toFixed(0);
    segundos = (resto % 60);
    
console.log(Hora,":",min,":",segundos)