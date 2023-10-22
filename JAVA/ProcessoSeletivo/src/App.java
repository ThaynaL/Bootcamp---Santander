import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class App {
    public static void main(String[] args) {
        System.out.println("Seleção dos candidatos");

        String [] candidatos = {"FELIPE","MÁRCIA","MIRELA","DANIELA","JORGE"};
        for(String candidato: candidatos){
            entrarContato(candidato);
        }
    }


    static void entrarContato(String candidato){
        int tentativasPossiveis = 0;
        boolean continuarLigando = true;
        boolean atendeu = false;

        do {
            atendeu = atender();
            continuarLigando = !atendeu;
            if (continuarLigando)
                tentativasPossiveis++;
            else
                System.out.println("Contado realizado com sucesso!");
        } while (continuarLigando && tentativasPossiveis < 5);
    
        if(atendeu)
            System.out.println("Conseguimos entrar em contado com "+ candidato + " na "+ tentativasPossiveis +" tentativa");
        else
            System.out.println("Não conseguimos entrar em contado com "+ candidato + ", mas o máximo de tentativas é de "+ tentativasPossiveis +" que foram realizadas");
    
    }

    //Método auxiliar
    static boolean atender(){
        return new Random().nextInt(3)==1;
    }

    static void imprimirSelecionados(){
        String [] candidatos = {"FELIPE","MÁRCIA","MIRELA","DANIELA","JORGE"};
        for(int indice = 0; indice < candidatos.length; indice++ ){
            System.out.println("O candidato de n° "+ (indice) +" é o " + candidatos[indice]);
        }

        //Forma abreviada
        for(String candidato: candidatos){
            System.out.println("O candidato selecionando foi "+ candidato);
        }
    }

    static void selecionarCandidato(){
        String [] candidatos = {"FELIPE","MÁRCIA","JULIA","PAULO","AUGUSTO","MÔNICA","FABRÍCIO","MIRELA","DANIELA","JORGE"};

        int candidatosSelecionados = 0;
        int candidatoAtual = 0;
        double salarioPossivel = 2000.0;

        while((candidatosSelecionados <= 3) && (candidatoAtual < candidatos.length)){
            String candidato = candidatos[candidatoAtual];
            double salarioPretendido = valorPretendido();
            if(salarioPossivel <= salarioPretendido){
                System.out.println("O candidato " + candidato + " foi selecionado para a vaga."); 
                candidatosSelecionados++;
            }else{
                System.out.println("O candidato " + candidato + " não foi selecionado.");
            }
            candidatoAtual++;
        }
    }

    static double valorPretendido() {
     return ThreadLocalRandom.current().nextDouble(1800, 2200);
    }

    static void analisarCandidato(double salarioPretendido){
        double salarioPossivel = 2000.0;
        if(salarioPossivel > salarioPretendido){
            System.out.println("Ligue para este candidato");
        }else if(salarioPretendido > salarioPossivel){
            System.out.println("Aguarde a analisa de todos os candidatos"); 
        }else{
            System.out.println("Ligue para este candidato com uma contra proposta");
        }
    }
}
