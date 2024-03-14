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

