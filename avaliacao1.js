// Beatriz Alexandra de Oliveira Medina, Ana Paula Cecilio de Oliveira

import rl from 'readline-sync';

function somar(num, num2){
    return num + num2
};

function diminuir(num, num2){
    return num - num2
};

function multiplicar(num, num2){
    return num * num2
};

function dividir(num, num2){
    if (num == 0 || num2 == 0 ){
        console.log('Digite um número diferente de 0!')
    } else {
        return num / num2
    }
};
 let opcao = 0

do {
    console.log('Opções: ')
    console.log('1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão \n5. Sair')
    let resposta = rl.questionInt('Digite a opção desejada: ')
    opcao = resposta
    switch(opcao){
        case 1:
             let num = rl.questionFloat('Digite um número: ')
             let num2 = rl.questionFloat('Digite o segundo número: ')
             console.log(somar(num, num2))
             break
        case 2:
            let num3 = rl.questionFloat('Digite um número: ')
            let num4 = rl.questionFloat('Digite o segundo número: ')
            console.log(diminuir(num3, num4))
            break
        case 3:
            let num5 = rl.questionFloat('Digite um número: ')
            let num6 = rl.questionFloat('Digite o segundo número: ')
            console.log(multiplicar(num5, num6))
            break
        case 4:
            let num7 = rl.questionFloat('Digite um número: ')
            let num8 = rl.questionFloat('Digite o segundo número: ')
            console.log(dividir(num7, num8))
            break
        case  5:
            console.log('Seu programa foi encerrado!')
            break
        default:
            console.log('Digite uma opção válida!')
            break
    } 
} while(opcao != 5);


