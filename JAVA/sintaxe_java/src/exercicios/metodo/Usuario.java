package exercicios.metodo;

public class Usuario {
    public static void main(String[] args) throws Exception{
        SmatTV smartTv = new SmatTV();
    
        System.out.println("A televisão está ligada ? " + smartTv.ligado);
        System.out.println("Qual o canal que a Tv está ? " + smartTv.canal);
        System.out.println("Qual o volume que a Tv está : " + smartTv.volume);

        System.out.println("| Novo status |");

        smartTv.ligar();
        System.out.println("Tv ligada ? " + smartTv.ligado);

        smartTv.desligar();
        System.out.println("Tv ligada ? " + smartTv.ligado);

        smartTv.aumentar();
        System.out.println("Atual Volume: " + smartTv.volume);

        smartTv.diminuir();
        System.out.println("Atual Volume: " + smartTv.volume);

        smartTv.mudarCanal(57);

        smartTv.proximoCanal();
        smartTv.proximoCanal();
        smartTv.proximoCanal();
        smartTv.proximoCanal();
        smartTv.proximoCanal();
        System.out.println("Atual Canal: " + smartTv.canal);

        smartTv.anteriorCanal();
        System.out.println("Atual Canal: " + smartTv.canal);

    }

}
