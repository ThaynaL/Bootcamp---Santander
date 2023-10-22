public class EstruturaCondicional {
    public static void main(String[] args){
        //Condição simples
        double saldo = 25.9;
        double valorSaque = 23;

        if(valorSaque < saldo){
            saldo = saldo - valorSaque;
            System.out.println("Novo saldo: " + saldo);
        }else{
            System.out.println("Saldo insuficiente");
        }

        //Condição encadeada
        int nota = 5;

        if(nota >= 6)
            System.out.println("Aprovado");
        else if((nota >= 4) && (nota < 6))
            System.out.println("Faça a prova final");
        else
            System.out.println("Reprovado");

        //Condição ternária
        String resultadoFinal = nota >= 6 ? "Aprovado" : nota >= 4 && nota < 6 ? "Faça a prova final" : "Reprovado";
        System.out.println(resultadoFinal);

        //Switch case
        String plano = "Super";

        switch (plano) {
            case "Bom": {
                System.out.println("150 MEGA");
                break;
            }
            case "Top": {
                System.out.println("250 MEGA");
                break;
            }
            case "Super": {
                System.out.println("500 MEGA");
                break;
            }
        }
    }

}
