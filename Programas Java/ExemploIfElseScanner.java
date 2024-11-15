/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
import java.util.Scanner;

public class ExemploIfElseScanner{
	public static void main(String[] args) {
	    //cria um objeto Scanner para ler a entrada do usuário
	    Scanner scanner = new Scanner (System.in);
	    
	    System.out.print("Digite quantos anos de experiência você possui: ");//solicita a entrada do usuário
	    int anosDeExperiencia = scanner.nextInt();//Lê o número de anos de experiência
	    
	    if (anosDeExperiencia <2){
	        System.out.println("Você é um desenvolvedor Júnior!");
	    } else if (anosDeExperiencia >= 2 && anosDeExperiencia <5){
	        System.out.println("Você é um desenvolvedor Pleno!");
	    } else {
	        System.out.println("Você é um desenvolvedor Sênior!");
	    }
	    
	}
}
	   