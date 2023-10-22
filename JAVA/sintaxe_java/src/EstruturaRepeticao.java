import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class EstruturaRepeticao {
    public static void main(String[] args){
        for(int carneiros = 1; carneiros <= 20; carneiros++){
            System.out.println("Passaram "+ carneiros + " carneirinhos");
        }
        System.out.println("Aaa, que sono!");

        String funcionarios [] = {"Livia", "Tadeu", "Flora", "Amanda"};
        for (String funcionario : funcionarios) {
            System.out.println("Conheça o funcionario: " + funcionario);
        }

        for(int valor = 1; valor < 8; valor++){
            if(valor == 5)
                continue;

            System.out.println(valor);
        }

        double mesada = 22.5;
        while(mesada > 0) {
            double valorSalgado = valorAleatorio();
            if(valorSalgado > mesada)
                valorSalgado = mesada;

            System.out.println("Valor do salgado: " + valorSalgado + " Adicionado no carrinho");
            mesada = mesada - valorSalgado;
        }
        System.out.println("Mesada:" + mesada);


        System.out.println("Discando...");
		do{
			System.out.println("Telefone tocando...");
		}while(tocando());
		System.out.println("Olá!");
   }
   private static double valorAleatorio() {
	return ThreadLocalRandom.current().nextDouble(2, 8);
    }
    private static boolean tocando() {
		boolean atendeu = new Random().nextInt(5)==1;
		System.out.println("Atendeu? " + atendeu);
		return ! atendeu;
	}
}
