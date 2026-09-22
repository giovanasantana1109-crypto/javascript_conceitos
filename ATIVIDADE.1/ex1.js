// UMA FABRICA DESEJA CALCULAR SUA PRODUCAO DIARIA. O PROGRAMA DEVE SOLICITAR O NOME DO PRODUTO, A QUANTIDADE PRODUZIA POR HORA E A QUANTIDADE DE HORAS TRABALHADAS. AO FINAL, DEVE CALCULAR E EXIBIR A PRODUCAO TOTAL.


const entrada = require('readline-sync');

const nome = entrada.question('Digite o nome do produto: ');
const quantidade = entrada.questionInt('Digite a quantidade produzida: ');
const horas = entrada.questionFloat('Digite a quantidade de horas trabalhadas: ');

const producao = quantidade * horas;

console.log(` === CALCULO DA PRODUCAO ===`);
console.log(`-Produto: ${nome}`);
console.log(`-Quantidade de pecas: ${quantidade}`);
console.log(`-Horas trabalhadas: ${horas}`);
console.log(`-A producao total é: ${producao}`);
