    
    //SuperClasse carro
    class Carro{
        public void acelerador(){
            System.out.println("O carro está acelerando.");
        }
    }
    //Subclasse Fusca
    class Fusca extends Carro{
        @Override
        public void acelerador(){
            System.out.println("O fusca acelera lentamente: Vruum!");
        }
    }
    //Subclasse Gol
    class Gol extends Carro{
        @Override
        public void acelerador(){
            System.out.println("O Gol acelera com potência: Vruuumm!");
        }
    }
    //Subclasse Jetta
    class Jetta extends Carro{
        @Override
        public void acelerador(){
            System.out.println("O Jetta acelera rapidamente: Vruuuuuuuuum!");
       }
    }
    //Classe Principal para Testar o Polimorfismo
    public class Main2 {
        public static void main(String[] args) {
            //Criando um array de Carros
            Carro[] carros = new Carro[3];
            carros[0] = new Fusca();
            carros[1] = new Gol();
            carros[2] = new Jetta();

            //Chamando o método acelerador() para cada carro
            for(Carro carro : carros){
                carro.acelerador(); //Polimorfismo em ação
            }

        }
        
    }

        




