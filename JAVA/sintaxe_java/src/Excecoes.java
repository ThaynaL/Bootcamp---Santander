import java.util.InputMismatchException;
import java.util.Locale;
import java.util.Scanner;

public class Excecoes {
    public static void main(String[] args){
        try{
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        
        System.out.println("Digite seu nome");
        String nome = scanner.next();
        
        System.out.println("Digite seu sobrenome");
        String sobrenome = scanner.next();

        System.out.println("Digite sua idade");
        int idade = scanner.nextInt();
        
        System.out.println("Digite sua altura");
        double altura = scanner.nextDouble();


        System.out.println("Olá, me chamo " + nome.toUpperCase() + " " + sobrenome.toUpperCase());
        System.out.println("Tenho " + idade + " anos ");
        System.out.println("Minha altura é " + altura + "cm ");
        scanner.close(); 
        }catch(InputMismatchException e){
            System.err.println("Os campos de idade e altura precisam ser númericos");
        }
        try {
            String cep = formatarCep("00000000"); 
            System.out.println(cep);
        } catch (Exception e) {
           System.err.println("Cep invalido");
        }
       
    }
    
    static String formatarCep(String cep) throws CepInvalidoException{
        if(cep.length() != 8)
          throw new CepInvalidoException();

          return "00.000-000";
    }
}   
    