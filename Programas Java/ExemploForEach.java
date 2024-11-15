/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

public class ExemploForEach{
	public static void main(String[] args) {
	    
	    int[] numeros = {1,2,3,4,5};//vetor inteiro "numeros"
	    for(int numero : numeros){
	        //lado esquerdo : lado direito
	        //Lado esquerdo: declara variável para armazenamento temporário do valor do elemento durante a repetição
	        //Lado direito: é o array/coleção que estamos percorrendo
	        System.out.println(numero);
	    }
	}
}
	   