import java.sql.Date;

public class SintaxeJava {
    public static void main(String[] args){
        //Classes
        String primeiroNome = "Felipe";
        String sobrenome = "Silva";
        String nomeCompleto = agrupar(primeiroNome, sobrenome);
        System.out.println(nomeCompleto);

        //Imprimir
        System.out.println("Olá Mundo!");

        //Como declarar variaveis
        int ano = 2020;
        ano = 2021;

        final String BR = "Brasil"; //Varivel imutavel, as variaveis maúsculas normalmente é finais
        //BR = "Brazil" não funcionaria

        //Tipos de variaveis - os mais usados
        String nome = "Cristina";
        char sexo = 'F';
        int populacao = 200000;
        boolean verdade = true;
        float pi = 3.14f;
        double preco = 9.99;
        double salario = 2500.56;
        Date dtNascimento = new Date(2007, 6,  2);

        //Constante
        final double AREA_UTILIZADA = 824.56;

        //Operadores
        //Atribuição
        populacao = 200008;
        //Aritmédicos
        double adicao = 8.9 + 6.5;
        double subtracao = 8 - 6.5;
        int multiplicacao = 4 * 9;
        int divisao = 3 / 1;
        int modulo = 24 % 3;

        //Concatenação
        String minhaLinguagem = "Eu utilizo " + "varias linguagens, mas a que eu estou me dedicando no momento é Java";

        //Encrementando valores
        int numero = 1;
        numero++;
        System.out.println(numero);
        System.out.println(numero --);
        /*A linha acima imprime o numero e subtrai 1 então depois de imprimir o numero é igual a 1*/
        System.out.println(numero);

        //Inverte variaveis boleanas
        System.out.println(!verdade);//Momentaneo
        System.out.println(verdade);

        //Operador ternário - <Condição> ? <Se verdadeira> : <Se for falsa>
        String ternario = adicao > subtracao ? "8.9 + 6.5 é maior que 8.9 - 6.5" : "8.9 + 6.5 é menor que 8.9 - 6.5";
        System.out.println(ternario);

        //Logicos
        boolean falso = false;
        if ((9 > 0) || falso) {
            System.out.println("Há uma condição verdadeira!");
        }

        if (verdade && true)
            System.out.println("As duas condições são verdadeiras!");
        else
            System.out.println("Uma das condições é falsa.");

        
    }
    public static String agrupar(String primeiroNome, String sobrenome){
        return "Resultado do método: " + primeiroNome.concat(" ").concat(sobrenome);
    }
}
