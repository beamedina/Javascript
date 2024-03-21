import EntradaDados from 'readline-sync';

//* Atividade 1 *//

let multiplicador = EntradaDados.questionFloat('Digite um numero: ');
let contador = 0;

while (contador <=10 ){
    let resultado = multiplicador * contador;
    console.log(`${multiplicador} X ${contador} = ${resultado}`)
    contador++;
};

//* atividade 2 *//

let  alunos = EntradaDados.questionInt('Quantos alunos tem na turma? ');
let cont = 0;
let notaTotal = 0;

while(cont <= alunos){
    let nota1 = EntradaDados.questionFloat('Nota do 1° bimestre: ');
    let nota2 = EntradaDados.questionFloat('Nota do 2° bimestre: ');
    let nota3 = EntradaDados.questionFloat('Nota do 3° bimestre: ');
    let nota4 = EntradaDados.questionFloat('Nota do 4° bimestre: ');
    let notaAl = (nota1 + nota2 + nota3 + nota4)/4;

    console.log(`A média do aluno é: ${notaAl}`);
    notaTotal += notaAl;
    cont++;
};

let media = notaTotal / alunos;
console.log(`Média da sala: ${media}`);

//* atividade 3 *//

const numAle = Math.floor(Math.random() * 100) + 1;
let tentativa;

do{
    tentativa= EntradaDados.questionInt("Adivinhe um número entre 1 a 100: ");

    if (tentativa == numAle) {
        console.log("Parabéns! Número correto.")
    } else if (tentativa < numAle) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

} while (tentativa !== numeroAleatorio);

//* atividade FOR 1 *//

let anterior = 0;
let atual = 1;
console.log(anterior);
console.log(atual);

for (let i = 3; i <= 20; i++) {
    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
};

//* atividade FOR 2 *//

for (let i = 1; i <= 2; i++) {
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}

/** atividade FOR IN OF 1 */
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

/** atividade FOR IN OF 2 */
const cores = ["Azul", "Branco", "Amarelo", "Verde", "Vermelho"];

for (let cor of cores) {
    // Imprimir o valor do elemento
    console.log(cor);
}

/** atividade FOR IN OF  */
const string = "JavaScript";
for (let caractere of string) {
    // Imprimir o caractere
    console.log(caractere);
}


