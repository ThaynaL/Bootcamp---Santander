alert("Está tudo:");//Aparece uma janela a mensagem

//Aqui teremos todos os exemplos da aula dois com os tipos primitivos para mim fixar a sintaxe 

//Tipos primitivos
var boolean = true;
console.log(boolean);//Escreve
var number = 10;
console.log(typeof(number)); //Tipo da variável
var variavel;
variavel = 'Altera o valor no caso para uma string';
console.log(variavel);//Se não tiver um valor a variavel é considerada nula
let variavellet = 3;
console.log(variavellet);//Não pode ter variavel "vazia", ou seja, nula e é mutavel
const variavelconst = 90;
console.log(variavelconst);//Imutavel e não pode ser vazia

//Como funciona os escopos 
var escopoGloba = 'global';
console.log(escopoGloba);
function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno); //um forma de manipular o escopo local
}
escopoLocal();

//Atribuição
var atribuir = 'recebe o valor';
//Comparação
var comparar = "0" == 0;
console.log(comparar);
//Comparação idêntica que compara os valores e os tipos
var comparaIdentico = "20" === 20;
console.log(comparaIdentico);




//Operações aritméticas
var adicao = 2 + 6;
var subtracao = 9 - 3;
var multiplicacao = 5 * 7;
var divisao = 8 / 4;
var resto = 9 % 7; //Quanto sobra da divisão(resto)
var potenciacao = 2 ** 5;
console.log("Adição:",adicao," Subtração:",subtracao," Multiplicação: ",multiplicacao);
console.log("Divisão:",divisao," O resto da divisão:",resto," PotEnciação:",potenciacao);

//Operações relacionais
var maior = 5 > 3;
console.log(maior);
var menor = 7 < 8;
console.log(menor);
var maiorOuIgual = 8 >= 8;
console.log(maiorOuIgual);
var menorOuIgual = 8 <= 6;
console.log(menorOuIgual);

//Operadores lógicos
var e = true && false;
console.log(e);
var ou = true || false;
console.log(ou);
var nao = !true;
console.log(nao);



//Vetores e objetos
//Deve se criar um vetor ou array, que pode guardar qualquer tipos de dados
let array = ['vetor ou array', 1, true, [2,7,9], ['array1','array2'], [true, false, true] ]; 
console.log(array);
console.log(array[4]);

//Manipulação de vetor
array.forEach(function(item, index){console.log(item, index)});//Imprime o array com o número do item
array.push('New item no final');//Adiciona um item no final do vetor
console.log(array);
array.unshift('Novo item no inicio');//Adiciona um item no inicio do vetor
console.log(array);
array.pop();//Remove um item no final do vetor
console.log(array);
array.shift();//Remove um item no inicio do vetor
console.log(array);
console.log(array.indexOf(true));//Retorna o que está no índice do vetor, ou seja, o número 
array.splice(0, 4);//Remove ou substitui um item dando o seu índice
console.log(array);
let novoArray = array.slice(2, 4);//Retorna uma parte de um vetor já existente
console.log(novoArray);

// Definindo um objeto
var objetos = {
    string1: 'string',
    number1: 50,
    boolean1: true,
    array1: ["array1", "acontece"],
    objectInterno: {
      interno: 'objeto interno'
    }
};
  
  // Imprimindo o objeto e uma propriedade específica
  console.log(objetos);
  console.log(objetos.objectInterno);
  
  // Acessando propriedades do objeto usando desestruturação
  let verdadeOuFalso = objetos.boolean;
  
  // Desestruturando o objeto usando chaves
  let { string: str, number: num, boolean: bool } = objetos;
  str = "agerse", num = 946, bool = true;
  // Imprimindo as propriedades desestruturadas
  console.log(str, num, bool); 
  



//Estrturas condicionais
//Estrutura de decisão
var jogador1 = 0, jogador2 = 0, placar;
jogador1 != -1 && jogador2 != -1 ? console.log('Os valores iniciais são válidos!') : console.log('Os jogadores são inválidos!') ;
if (jogador1 > 0 && jogador2 == 0){
    console.log('O primeiro jogador pontuou');
    placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador1 == 0){
    console.log('O segundo jogador pontuou');
    placar = jogador1 < jogador2;
}else {
    console.log('Ninguém marcou ponto!');
}
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador1 < jogador2:
        console.log('Jogador 2 ganhou!');
        break;
    case placar = jogador1 == jogador2:
        console.log('Houve um empate!');
        break;
    default:
        console.log('Ninguém ganhou.')
        break;
}

//Laços de repetição
var arraynovo = [5,8,6,9,2];
for (let i = 0; i < arraynovo.length;i++) {
    console.log('índice:',i); // números do indice no caso de 0 a 4
}
//For in executa repetição a partir de uma propriedade
for (let i in arraynovo){
    console.log(i);
}
// com objeto
for (let i in objetos){
    console.log(i); //Escreve o que está atribuido
}

for (let i of arraynovo){
    console.log(i);//Imprime o valor do array
}

for (let i of objetos.array1){
    console.log(i);//Imprime o valor da propriedade, ou seja, o que está depois do ponto
}

//While e do/while
var a = 0;
do{
    a++;
    console.log(a);
}while(a < 10);

var b = 0;
while (b < 5){
    b++;
    console.log(b);
}

//Funções = blocos de comando ou de instruções
function funcao() {
    console.log("Esta mensagem está em uma função declarativa.");
} 
funcao();

function somar(numero1, numero2) {
    var soma = numero1 + numero2;
    console.log(soma);
}

somar(5, 3); // Chamando a função com argumentos

//Função em uma variavel
var hello = function(){
    console.log("Hello World");
}
hello();
/* Expressão da função com nomeação:
var hello = ola() function{
    console.log("Hello World");
}
hello();
*/

//Arrow function
var arrowFuncao = () => {
    console.log("Sou uma função com a sintaxe curta.");
}
arrowFuncao();

//Para formatar a saida de um real
var real = 20.99999;
console.log("Número formatado com duas casas decimais:",real.toFixed(2));

//Formatar na moeda brasileira
var valor = 2000.89;
var moedaBR = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
var outraFormaMoedaBR = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(valor);
console.log(moedaBR);
console.log(outraFormaMoedaBR);