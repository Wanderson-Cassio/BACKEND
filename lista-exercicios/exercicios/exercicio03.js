/*3. Escreva um script para ler o salário mensal atual de um funcionário e o 
percentual de reajuste. Calcular e escrever o valor do novo salário.*/

const prompt = require('prompt-sync') ();

console.log("Exercício 3")

let salario = Number(prompt('Digite o salário atual R$: '))
let reajuste = Number(prompt('Digite o percentual de reajuste: '))

let novoSalario = salario + (salario * reajuste /100)

console.log(`O novo salário é R$ ${novoSalario}`)
