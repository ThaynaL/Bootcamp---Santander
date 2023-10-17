function calculadora() {
    const operation = Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Potenciação (**)\n 5 - Divisão Real (/)\n 6 - Divisão Inteira (%)'));


    let number1 = Number(prompt('Insira o primeiro número: '));
    let number2 = Number(prompt('Insira o segundo número: '));
    let result;

    function soma() {
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`); // Entre o (há um crase `)
        novaOperacao();
    }
    function subtrai() {
        result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        novaOperacao();
    }
    function multiplicar() {
        result = number1 * number2;
        alert(`${number1} + ${number2} = ${result}`);
        novaOperacao();
    }
    function potenciacao() {
        result = number1 ** number2;
        alert(`${number1} elevado a ${number2} é igual a ${result}`);
        novaOperacao();
    }
    function divisao() {
        result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        novaOperacao();
    }
    function resto() {
        result = number1 % number2;
        alert(`O resto da divisão entre ${number1} e ${number2} é igual a ${result}`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');
        if(opcao == 1){
            calculadora();
        }else if(opcao == 2){
            alert('Até mais!');
        }else {
            alert('Digite a opção válida');
            novaOperacao();
        }
    }

    switch (operation) {
        case 1:
            soma();
            break;
        case 2:
            subtrai();
            break;
        case 3:
            multiplicar();
            break;
        case 4:
            potenciacao();
            break;
        case 5:
            divisao();
            break;
        case 6:
            resto();
            break;
        default:
            alert('Operação inválida!');
            calculadora();
            break;
    }

}
calculadora();