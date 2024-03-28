import EntradaDados from 'readline-sync';

// Atividades slide fácil

// 1

     //declarar

function letraMaiuscula(string){
    return string.toUpperCase();
}
let nome = EntradaDados.question('Informe seu nome: ')
console.log(`EU SU O ${letraMaiuscula(nome)}`)

//expressão

const letrinhas = function(string){
    return string.toUpperCase()
};
console.log(`VOCÊ NÃO É O ${letrinhas(nome)}`)

//função

const letraGrande = (string) => string.toUpperCase();
console.log(`ENTENDEU, ${letraGrande(nome)}!?`)

//2

       // declarar

function imparPar(num){
    if (num % 2 == 0){
        return `${num} é par!`
    } else {
        return `${num} é impar!`
    };
};
let num = EntradaDados.questionInt('Informe um numero: ')
console.log(imparPar(num))

//3

     //expressão

const soma = function(numero){
     return num + num2
 }
 let num1 = EntradaDados.questionFloat('Digite um numero: ')
 let num2 = EntradaDados.questionFloat('Digite outro numero: ')
 console.log(soma(num1, num2))