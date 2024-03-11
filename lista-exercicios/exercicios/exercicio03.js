/*3. Escreva um script para ler o salário mensal atual de um funcionário e o 
percentual de reajuste. Calcular e escrever o valor do novo salário.*/

let prompt = require('prompt-sync') ();

let salario = Number(prompt('Digite o salário atual R$: '))
let reajuste = Number(prompt('Digite o reajuste: '))

let novoSalario = salario + (salario * reajuste /100)

console.log(`O novo salário é R$ ${novoSalario}`)
