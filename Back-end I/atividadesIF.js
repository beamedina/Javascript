import entradaDados from "readline-sync";

//* Atividade 1*//

let dia = entradaDados.questionInt("Informe o dia da semana (de 1 a 7): ");

switch (dia) {
    case 1:
        console.log('Domingo')
        break;
    case 2:
        console.log('Segunda-Feira')
        break;
    case 3:
        console.log('Terça-Feira')
        break;
    case 4:
        console.log('Quarta-Feira')
        break;
    case 5:
        console.log('Quinta-Feira')
        break;
    case 6:
        console.log('Sexta-Feira')
        break;
    case 7:
        console.log('Sabádo')
        break;

    default:
        console.log('dia inválido!')
        break;
};


//* Atividade 2 *//

let mes = entradaDados.questionInt("Informe o mês (de 1 a 12): ");

switch (mes) {
    case 1:
        console.log('Janeiro')
        break;
    case 2:
        console.log('Fevereiro')
        break;
    case 3:
        console.log('Março')
        break;
    case 4:
        console.log('Abril')
        break;
    case 5:
        console.log('Maio')
        break;
    case 6:
        console.log('Junho')
        break;
    case 7:
        console.log('Julho')
        break;
    case 8:
        console.log('Agosto')
        break;
    case 9:
        console.log('Setembro')
        break;
    case 10:
        console.log('Outubro')
        break;
    case 11:
        console.log('Novembro')
        break;
    case 12:
        console.log('Dezembro')
        break;

    default:
        console.log('dia inválido!')
        break;
};

//* atividade 3 *//

let num = entradaDados.questionFloat('Informe um número: ')
let num2 = entradaDados.questionFloat('Informe outro: ')
let operacao = entradaDados.question('Qual operação deseja usar? (+, -, /, *): ')

switch (operacao) {
    case "+":
        console.log(`Resultado: ${num+num2}`)
        break;
    case "-":
        console.log(`Resultado: ${num-num2}`)
        break;
    case "/":
        console.log(`Resultado: ${num/num2}`)
        break;
    case "*":
        console.log(`Resultado: ${num*num2}`)
        break;
    default:
        console.log("Operador inválido!")
        break;
};