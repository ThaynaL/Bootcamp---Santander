package exercicios.metodo;

public class SmatTV {
    boolean ligado = false;
    int canal = 4;
    int volume = 25;

    public void ligar(){
        ligado = true;
    }
    public void desligar(){
        ligado = false;
    }

    public void aumentar(){
        if((volume < 100) && (volume > 0)){
            volume++;
        }else if(volume == 100){
            System.out.println("Se encontra no volume máximo. Não é possível aumentar!");
        }else{
            System.out.println("Se encontra no volume mínimo.");
        }
    }
    public void diminuir(){
        if((volume < 100) && (volume > 0)){
            volume--;
        }else if(volume == 0){
            System.out.println("Se encontra no volume mínimo. Não é possível diminuir!");
        }else{
            System.out.println("Se encontra no volume máximo.");
        }
    }

    public void proximoCanal(){
        if((canal < 304) && (volume > 0)){
            canal++;
        }else{
            canal = 0;
        }
    }
    public void anteriorCanal(){
        if((canal < 304) && (volume > 0)){
            canal--;
        }else if(volume == 304){
            canal = 0;
        }else{
            canal = 304;
        }
    }
    public void mudarCanal(int novoCanal){
        canal = novoCanal;
    }
}
